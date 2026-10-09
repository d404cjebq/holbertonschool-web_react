# TypeScript

Holberton School - `holbertonschool-web_react` / `TypeScript`

A hands-on introduction to TypeScript: basic types, interfaces, classes, functions, DOM manipulation, advanced types, namespaces, declaration merging, ambient declarations and nominal typing.

## Learning Objectives

- Basic types in TypeScript
- Interfaces, classes and functions
- Working with the DOM from TypeScript
- Generic types
- Namespaces and declaration merging
- Using an ambient declaration file to type an external JavaScript library
- Basic nominal typing (brand convention)

## Requirements

- Ubuntu 18.04, Node.js and npm
- Editors: `vi`, `vim`, `emacs` or Visual Studio Code
- All files end with a new line
- The TypeScript compiler must not show any warning or error

## Setup and Usage

Every task directory is an independent project.

```bash
cd task_0          # or any other task directory
npm install
npm run build      # compile with webpack, no type errors expected
npm run start-dev  # serve at http://localhost:8080
```

`task_4` only contains `package.json`, `tsconfig.json` and the namespace files. Check it with:

```bash
cd task_4
npm install
npx tsc --noEmit -p .
```

## Project Structure

| Directory | Tasks | Main file(s) |
|-----------|-------|--------------|
| `task_0` | 0 | `js/main.ts` |
| `task_1` | 1, 2, 3, 4 | `js/main.ts` |
| `task_2` | 5, 6, 7 | `js/main.ts` |
| `task_3` | 8 | `js/main.ts`, `js/interface.ts`, `js/crud.d.ts`, `js/crud.js` |
| `task_4` | 9 | `js/subjects/*.ts` |
| `task_5` | 10 | `js/main.ts` |

## Tasks and Functions Explained

### 0. Creating an interface for a student (`task_0`)

- **`interface Student`** describes the shape of a student object: `firstName`, `lastName`, `age` and `location`.
- `student1` and `student2` are typed as `Student` and stored in `studentsList: Student[]`.
- The table is built with vanilla DOM calls: `document.createElement` creates the elements, `textContent` fills the cells, and `appendChild` attaches rows to the table and the table to `document.body`.
- Each row shows the student's first name and location.

### 1. Teacher interface (`task_1`)

- **`interface Teacher`**:
  - `readonly firstName` and `readonly lastName` can only be set when the object is created.
  - `yearsOfExperience?` is optional.
  - `[propName: string]: any` is an **index signature**: it allows any extra property (for example `contract`) whose name is a string and whose value can be of any type.

### 2. Extending the Teacher interface (`task_1`)

- **`interface Directors extends Teacher`** inherits every property of `Teacher` and adds the required `numberOfReports: number`.

### 3. Printing teachers (`task_1`)

- **`printTeacher(firstName, lastName)`** returns the first letter of the first name followed by the full last name: `printTeacher("John", "Doe")` returns `J. Doe`.
- **`interface printTeacherFunction`** describes the function through a **call signature**: `(firstName: string, lastName: string): string`.

### 4. Writing a class (`task_1`)

- **`class StudentClass`** has a constructor taking `firstName` and `lastName`, plus two methods:
  - `workOnHomework()` returns `Currently working`.
  - `displayName()` returns the first name.
- **`interface StudentClassInterface`** describes the class instance (its methods).
- **`interface StudentConstructor`** describes the constructor through a **construct signature**: `new (firstName: string, lastName: string): StudentClassInterface`.

### 5. Advanced types, part 1 (`task_2`)

- **`DirectorInterface`** and **`TeacherInterface`** declare the methods each role must have.
- **`class Director`** and **`class Teacher`** implement them with `implements`.
- **`createEmployee(salary: number | string): Director | Teacher`** uses **union types**. It returns a `Teacher` when the salary is a number below 500, and a `Director` otherwise.

### 6. Functions specific to employees (`task_2`)

- **`isDirector(employee)`** is a **type predicate** (`employee is Director`). It returns `true` or `false` and also tells the compiler that the value is a `Director` inside the `if` block.
- **`executeWork(employee)`** calls `workDirectorTasks()` for a director and `workTeacherTasks()` for a teacher.

### 7. String literal types (`task_2`)

- **`type Subjects = 'Math' | 'History'`** restricts a variable to exactly these two values.
- **`teachClass(todayClass: Subjects)`** returns `Teaching Math` or `Teaching History`. Any other value is a compile-time error.

### 8. Ambient namespaces (`task_3`)

- **`interface.ts`** exports the type `RowID` (a `number`) and the interface `RowElement`.
- **`crud.js`** is a plain JavaScript library with `insertRow`, `updateRow` and `deleteRow`.
- **`crud.d.ts`** is an **ambient declaration file**: it types the library functions without containing any implementation, so the compiler and the IDE understand them.
- **`main.ts`** loads the declarations with a **triple slash directive** (`/// <reference path="crud.d.ts" />`), imports everything from `crud.js` as `CRUD`, then inserts, updates and deletes a row.

### 9. Namespace and declaration merging (`task_4`)

- Everything lives in the **`Subjects` namespace**.
- **`Teacher.ts`** declares `interface Teacher` (`firstName`, `lastName`).
- **`Subject.ts`** declares `class Subject` with a `teacher` attribute and a `setTeacher()` setter.
- **`Cpp.ts`**, **`React.ts`** and **`Java.ts`** each:
  - **merge** the `Teacher` interface to add an optional attribute (`experienceTeachingC`, `experienceTeachingReact`, `experienceTeachingJava`),
  - declare a class extending `Subject` with `getRequirements()` and `getAvailableTeacher()`. The latter returns `Available Teacher: <first name>`, or `No available teacher` when the teacher has no experience in that subject.

### 10. Brand convention and nominal typing (`task_5`)

- TypeScript compares types by **structure**, so two interfaces with only `credits: number` would be interchangeable.
- **`MajorCredits`** and **`MinorCredits`** each add a **brand** property (`brand: 'major'` and `brand: 'minor'`), which makes them incompatible with each other. This imitates **nominal typing**.
- **`sumMajorCredits(subject1, subject2)`** and **`sumMinorCredits(subject1, subject2)`** add the credits of two subjects and return a value of the matching type. Mixing major and minor credits is a compile-time error.

## Author
Dhay
