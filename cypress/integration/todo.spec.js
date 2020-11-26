/// <reference types="cypress" />

import Action from "../support/pages/Todo/actions";
import { DATA as data } from "../support/pages/Todo/data";
import { ELEMENTS as el } from "../support/pages/Todo/elements";

describe("Todo", () => {
  context("Features", () => {
    beforeEach(() => {
      Action.visit();
    });

    it("shoud add a new todo via button", () => {
      Action.addNewTodoByButton(data.singleTodo);
      Action.findTodo(data.singleTodo);
    });

    it("shoud add a new todo via enter", () => {
      Action.addNewTodoByEnter(data.singleTodo);
      Action.findTodo(data.singleTodo);
    });

    it("should add todos on top of list", () => {
      Action.addMultipleTodos();

      assert(cy.get("[data-cy=todo-list] > :nth-child(1)"), data.todos[4]);
      assert(cy.get("[data-cy=todo-list] > :nth-child(2)"), data.todos[3]);
      assert(cy.get("[data-cy=todo-list] > :nth-child(3)"), data.todos[2]);
      assert(cy.get("[data-cy=todo-list] > :nth-child(4)"), data.todos[1]);
    });

    it("shoud delete single todo", () => {
      Action.addNewTodoByEnter(data.singleTodo);
      Action.deleteTodo(data.singleTodo);
      Action.findEmptyListMessage();
    });

    it("should delete todos correctly", () => {
      Action.addMultipleTodos();

      Action.deleteTodo(data.todos[2]);
      Action.notFindTodo(data.todos[2]);

      Action.deleteTodo(data.todos[0]);
      Action.notFindTodo(data.todos[0]);
    });

    it("should show empty message when has no todos", () => {
      Action.deleteAllTodos();
      cy.contains(data.layout.emptyListMessage);
    });

    it("shoud keep todos after page refresh", () => {
      Action.addMultipleTodos();

      cy.reload();

      cy.contains(data.todos[0]);
      cy.contains(data.todos[1]);
      cy.contains(data.todos[2]);
      cy.contains(data.todos[3]);
    });
  });

  context("Layout", () => {
    it("should have the correct title", () => {
      cy.title().should("eq", data.layout.pageTitle);
    });

    it("should load components properly", () => {
      cy.contains("Todo App");

      cy.get(el.input).should(
        "have.attr",
        "placeholder",
        data.layout.inputTodoPlaceholder
      );

      cy.get(el.input).should("have.value", "");

      cy.get(el.addButton).contains(data.layout.btnAddTodoText);
    });
  });
});
