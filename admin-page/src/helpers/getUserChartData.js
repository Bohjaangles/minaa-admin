export default function (condition) {
  const userConstants = ["NEW_USERS", "BY_USER", "BY_QUALIFICATION", "REPORTS_SUBMITTED"];

  let data;

  switch (condition) {
    case userConstants[0]:
      data = newUserData;
      break;
    case userConstants[1]:
      data = reportsPerUserData;
      break;
    case userConstants[2]:
      data = reportsByQualificationData;
      break;
    case userConstants[3]:
      data = totalReportsData;
      break;
    default:
      data = []
  }
  return data
}

export const newUserData = [
  { name: "January", value1: 180, value2: 200 },
  { name: "February", value1: 200, value2: 380 },
  { name: "March", value1: 300, value2: 680 },
  { name: "April", value1: 400, value2: 1080 },
  { name: "May", value1: 500, value2: 1580 },
  { name: "June", value1: 600, value2: 2180 },
  { name: "July", value1: 700, value2: 2880 },
  { name: "August", value1: 800, value2: 3680 },
  { name: "September", value1: 900, value2: 4580 },
  { name: "October", value1: 1000, value2: 5580 },
  { name: "November", value1: 1100, value2: 6680 },
  { name: "December", value1: 1200, value2: 7880 },
]

export const reportsByQualificationData = [
  { name: "January", value1: 22, value2: 13, value3: 25 },
  { name: "February", value1: 9, value2: 44, value3: 53 },
  { name: "March", value1: 12, value2: 23, value3: 35 },
  { name: "April", value1: 23, value2: 12, value3: 35 },
  { name: "May", value1: 34, value2: 23, value3: 57 },
  { name: "June", value1: 45, value2: 34, value3: 79 },
  { name: "July", value1: 56, value2: 45, value3: 101 },
  { name: "August", value1: 67, value2: 56, value3: 123 },
  { name: "September", value1: 78, value2: 67, value3: 145 },
  { name: "October", value1: 89, value2: 78, value3: 167 },
  { name: "November", value1: 100, value2: 89, value3: 189 },
  { name: "December", value1: 111, value2: 100, value3: 211 },
]

export const reportsPerUserData = [
  { name: "January", value1: 2.5, value2: 25 },
  { name: "February", value1: 1.7, value2: 53 },
  { name: "March", value1: 3.1, value2: 35 },
  { name: "April", value1: 2.5, value2: 35 },
  { name: "May", value1: 2.9, value2: 57 },
  { name: "June", value1: 3.3, value2: 79 },
  { name: "July", value1: 3.7, value2: 101 },
  { name: "August", value1: 4.1, value2: 123 },
  { name: "September", value1: 4.5, value2: 145 },
  { name: "October", value1: 4.9, value2: 167 },
  { name: "November", value1: 5.3, value2: 189 },
  { name: "December", value1: 5.7, value2: 211 },
]

export const totalReportsData = [
  { name: "January", value1: 25 },
  { name: "February", value1: 53 },
  { name: "March", value1: 35 },
  { name: "April", value1: 35 },
  { name: "May", value1: 57 },
  { name: "June", value1: 79 },
  { name: "July", value1: 101 },
  { name: "August", value1: 123 },
  { name: "September", value1: 145 },
  { name: "October", value1: 167 },
  { name: "November", value1: 189 },
  { name: "December", value1: 211 },
]