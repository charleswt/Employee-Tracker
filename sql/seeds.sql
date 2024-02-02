INSERT INTO department (name)
VALUES ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 110000, 1),
    ("Salesperson", 100000, 1),
    ("Lead Engineer", 110000, 2),
    ("Software Engineer", 100000, 2),
    ("Account Manager", 110000, 3),
    ("Accountant", 100000, 3),
    ("Legal Team Lead", 110000, 4),
    ("Lawyer", 100000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Emily", "Johnson", 1, NULL),
    ("Benjamin", "Anderson", 2, 1),
    ("Sophia", "Martinez", 3, NULL),
    ("Jackson", "Williams", 4, 3),
    ("Olivia", "Brown", 5, NULL),
    ("Liam", "Davis", 6, 5),
    ("Ava", "Taylor", 7, NULL),
    ("Ethan", "Moore", 8, 7);