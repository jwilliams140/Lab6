export const getStanding = (gpa) => {
  gpa = Number(gpa);

  if (gpa >= 3.5) return 'Honors';
  if (gpa >= 2.0) return 'Good Standing';
  return 'Academic Probation';
};

export const getLoad = (units) => {
  units = Number(units);

  if (units >= 12) return 'Full Time';
  if (units >= 6) return 'Part Time';
  return 'Light Load';
};

export const hasHold = (student) => {
  const gpa = Number(student.gpa);
  const dues = Number(student.dues);

  return gpa < 2.0 || dues > 0;
};

export const getRisk = (student) => {
  const gpa = Number(student.gpa);
  const dues = Number(student.dues);

  if (gpa < 2.0 || dues > 500) return 'High';
  if (gpa < 2.5 || dues > 0) return 'Medium';

  return 'Low';
};