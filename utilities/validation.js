export const validateStudent = (student, students, editing = false) => {
  let errors = {};

  if (!student.name || student.name.trim() === '') {
    errors.name = 'Name is required';
  }

  if (!student.id || student.id.trim() === '') {
    errors.id = 'Student ID is required';
  } else {
    const duplicate = students.find(
      s => s.id === student.id && (!editing || s.id !== student.originalId)
    );

    if (duplicate) {
      errors.id = 'Student ID must be unique';
    }
  }

  const age = Number(student.age);
  if (isNaN(age) || age < 16 || age > 100) {
    errors.age = 'Age must be between 16 and 100';
  }

  const gpa = Number(student.gpa);
  if (isNaN(gpa) || gpa < 0 || gpa > 4) {
    errors.gpa = 'GPA must be between 0.0 and 4.0';
  }

  const units = Number(student.units);
  if (isNaN(units) || units < 0 || units > 21) {
    errors.units = 'Units must be between 0 and 21';
  }

  const year = Number(student.gradYear);
  const currentYear = new Date().getFullYear();

  if (isNaN(year) || year < currentYear || year > currentYear + 10) {
    errors.gradYear = 'Invalid graduation year';
  }

  return errors;
};