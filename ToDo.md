1. put a form in html
    a. with 5 inputs with ids
        - first name
        - last name
        - ID number
        - job title
        - annual salary
    b. create a new variable in js that stores the values of the 5 inputs.
2. put a table in html
    a. create 6 rows using thead
    b. create tbody with an id
3. Put the total monthly cost in the footer.
    - 
    - add a class called 'over-budget'
4. create a submit button with id (in form)
    a. add an onclick element that references addNewEmployee
    b. create addNewEmployee function in js that 
        - takes the form input variables and puts them in the table, with a delete button onclick.
            *delete button needs to reference deleteNewEmployee onclick
        - updates the total monthly cost in the footer
        - clears out the form inputs
        - create a conditional that turns the footer text red if total monthly cost > 20,000.
5. create a deleteNewEmployee function in js that
    a. use .remove to delete the selected row

