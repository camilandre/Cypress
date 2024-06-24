///<reference types="Cypress"/>

describe("basic test", () => {
  beforeEach("visit url", () => {
    const URL = "https://commitquality.com/practice-general-components";
    cy.visit(URL);
  });

  it("click button", () => {
    let button = cy.get('[data-testid="basic-click"]').should("exist");
    cy.contains("Button clicked").should("not.exist");
    button.click();
    cy.contains("Button clicked").should("exist");
  });

  it("double click button", () => {
    let double_button = cy.get('[data-testid="double-click"]').should("exist");
    let event_button_no_exist = () => {
      cy.contains("Button double clicked").should("not.exist");
    };
    event_button_no_exist();
    double_button.click();
    event_button_no_exist();
    double_button.dblclick();
    cy.contains("Button double clicked").should("exist");
  });

  it("right click button", () => {
    let rclick_button = cy.get('[data-testid="right-click"]').should("exist");
    let event_button_no_exist = () => {
      return cy.contains("Button right mouse clicked").should("not.exist");
    };
    rclick_button.dblclick();
    event_button_no_exist();
    rclick_button.click();
    event_button_no_exist();
    rclick_button.rightclick();
    cy.contains("Button right mouse clicked").should("exist");
  });

  it("I can check radio button and check correct message appears", () => {
    cy.get(".radio-buttons-container").should("not.contain", "option1 clicked");
    cy.get(".radio-buttons-container").should("not.contain", "option2 clicked");
    cy.get("[data-testid = option1]")
      .should("not.be.checked")
      .check()
      .should("be.checked");
    cy.get(".radio-buttons-container").should("contain", "option1 clicked");
    cy.get(".radio-buttons-container").should("not.contain", "option2 clicked");
    cy.get("[data-testid = option2]").check();
    cy.get(".radio-buttons-container").should("contain", "option2 clicked");
    cy.get(".radio-buttons-container").should("not.contain", "option1 clicked");
  });

  it("I can check radio button and check correct message appears", () => {
    cy.contains("option2 clicked").should("not.exist");
    cy.contains("option1 clicked").should("not.exist");
    cy.get('[data-testid="option1"]').click();
    cy.contains("option1 clicked").should("exist");
    cy.contains("option2 clicked").should("not.exist");
    cy.get('[data-testid="option2"]').click();
    cy.contains("option2 clicked").should("exist");
    cy.contains("option1 clicked").should("not.exist");
  });

  it.only("Check select an option and check that the text appears inside selector", () => {
    cy.get("select")
      .contains("Select an option")
      .should("exist")
      .and("be.visible")
      .and("have.attr", "value", "");
    cy.get('select option[value="option1"]')
      .should("exist")
      .and("be.visible")
      .and("have.attr", "value", "option1");
    cy.get('select option[value="option2"]')
      .should("exist")
      .and("be.visible")
      .and("have.attr", "value", "option2");
    cy.get('select option[value="option3"]')
      .should("exist")
      .and("be.visible")
      .and("have.attr", "value", "option3");
    cy.get("select option:selected")
      .should("have.text", "Select an option")
      .and("have.attr", "value", "");
    cy.get("select").select("option1");
    cy.get("select option:selected")
      .should("have.text", "Option 1")
      .and("have.attr", "value", "option1");
    cy.get("select").select("option2");
    cy.get("select option:selected")
      .should("have.text", "Option 2")
      .and("have.attr", "value", "option2");
    cy.get("select").select("option3");
    cy.get("select option:selected")
      .should("have.text", "Option 3")
      .and("have.attr", "value", "option3");
    cy.get("select").select("");
    cy.get("select option:selected").should("have.text", "Select an option");
  });

  it("Check select multiple checkbox and check that the text appears inside selector", () => {
    cy.get('input[data-testid="checkbox1"]')
      .should("exist")
      .and("be.visible")
      .and("have.attr", "name", "checkbox1")
      .and("have.attr", "type", "checkbox");
    cy.get('input[data-testid="checkbox2"]')
      .should("exist")
      .and("be.visible")
      .and("have.attr", "name", "checkbox2")
      .and("have.attr", "type", "checkbox");
    cy.get('input[data-testid="checkbox3"]')
      .should("exist")
      .and("be.visible")
      .and("have.attr", "name", "checkbox3")
      .and("have.attr", "type", "checkbox");
    cy.contains("Checkbox 1 checked").should("not.exist");
    cy.contains("Checkbox 2 checked").should("not.exist");
    cy.contains("Checkbox 3 checked").should("not.exist");
    cy.get('input[data-testid="checkbox1"]').check();
    cy.get('input[data-testid="checkbox1"]').should("be.checked");
    cy.get('input[data-testid="checkbox2"]').should("not.be.checked");
    cy.get('input[data-testid="checkbox3"]').should("not.be.checked");
    cy.contains("Checkbox 1 checked").should("exist").and("be.visible");
    cy.contains("Checkbox 2 checked").should("not.exist");
    cy.contains("Checkbox 3 checked").should("not.exist");
    cy.get('input[data-testid="checkbox2"]').check();
    cy.get('input[data-testid="checkbox1"]').should("be.checked");
    cy.get('input[data-testid="checkbox2"]').should("be.checked");
    cy.get('input[data-testid="checkbox3"]').should("not.be.checked");
    cy.contains("Checkbox 1 checked").should("exist").and("be.visible");
    cy.contains("Checkbox 2 checked").should("exist").and("be.visible");
    cy.contains("Checkbox 3 checked").should("not.exist");
    cy.get('input[data-testid="checkbox2"]').uncheck();
    cy.get('input[data-testid="checkbox3"]').check();
    cy.get('input[data-testid="checkbox1"]').should("be.checked");
    cy.get('input[data-testid="checkbox2"]').should("not.be.checked");
    cy.get('input[data-testid="checkbox3"]').should("be.checked");
    cy.contains("Checkbox 1 checked").should("exist").and("be.visible");
    cy.contains("Checkbox 2 checked").should("not.exist");
    cy.contains("Checkbox 3 checked").should("exist").and("be.visible");
  });
});
