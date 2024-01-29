INSERT INTO department(name)
  VALUES
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

INSERT INTO role(title, salary, department_id)
  VALUES
    ("Sales Lead", 110000, 1),
    ("Salesperson", 100000, 1),
    ("Lead Engineer", 110000, 2),
    ("Software Engineer", 100000, 2),
    ("Account Manager", 110000, 3),
    ("Accountant", 100000, 3),
    ("Legal Team Lead", 110000, 4),
    ("Lawyer", 100000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
  VALUES
    ("Emily", "Johnson", 3, NULL),
    ("Benjamin", "Anderson", 4, 1),
    ("Sophia", "Martinez", 1, NULL),
    ("Jackson", "Williams", 2, 3),
    ("Olivia", "Brown", 7, NULL),
    ("Liam", "Davis", 8, 5),
    ("Ava", "Taylor", 5, NULL),
    ("Ethan", "Moore", 6, 7);