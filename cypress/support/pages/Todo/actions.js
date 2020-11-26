import { DATA as data } from "./data";
import { ELEMENTS as el } from "./elements";

class TodoActions {
  visit() {
    cy.visit("/");
  }

  addNewTodoByButton(todo) {
    cy.get(el.input)
      .clear()
      .type(todo);
    cy.get(el.addButton).click();
  }

  addNewTodoByEnter(todo) {
    cy.get(el.input)
      .clear()
      .type(`${todo} {enter}`);
  }

  addMultipleTodos() {
    this.addNewTodoByEnter(data.todos[0]);
    this.addNewTodoByEnter(data.todos[1]);
    this.addNewTodoByEnter(data.todos[2]);
    this.addNewTodoByEnter(data.todos[3]);
  }

  deleteTodo(todo) {
    cy.contains(todo)
      .find("button")
      .click();
  }

  deleteAllTodos() {}

  findTodo(todo) {
    cy.get(el.list).should("contain", todo);
  }

  notFindTodo(todo) {
    cy.get(el.list).should("not.contain", todo);
  }

  findEmptyListMessage() {
    cy.contains(data.layout.emptyListMessage);
  }
}

export default new TodoActions();
