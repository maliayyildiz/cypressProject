/// <reference types ="cypress" />

it('google test', function(){
 
    cy.visit('https://hypnotes.net/')
    cy.get('.hide > [href="/api/login"]').click()
    cy.get('.mt-40 > .single-input').type('hyraitesting@gmail.com')
    cy.get('div.mt-20 > .single-input').type('hyrai6161')
    cy.get('.genric-btn').click()

    cy.contains('Add Client').click()

    cy.get('#first_name').type('Naim')
    cy.get('#last_name').type('Ishmail')
    cy.get('#email').type('n@i.com')
    cy.get('.genric-btn').click()

})

it.only('login test',function(){
     
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get('#divUsername > .form-hint').type('Admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()

    cy.get('#menu_admin_viewAdminModule > b').click()
  
})