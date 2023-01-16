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

const newUserData = [
  { name: "January", total: 180, cumulative: 200 },
  { name: "February", total: 200, cumulative: 380 },
  { name: "March", total: 300, cumulative: 680 },
  { name: "April", total: 400, cumulative: 1080 },
  { name: "May", total: 500, cumulative: 1580 },
  { name: "June", total: 600, cumulative: 2180 },
  { name: "July", total: 700, cumulative: 2880 },
  { name: "August", total: 800, cumulative: 3680 },
  { name: "September", total: 900, cumulative: 4580 },
  { name: "October", total: 1000, cumulative: 5580 },
  { name: "November", total: 1100, cumulative: 6680 },
  { name: "December", total: 1200, cumulative: 7880 },
]

const reportsByQualificationData = [
  { name: "January", base: 22, admin: 13, total: 25 },
  { name: "February", base: 9, admin: 44, total: 53 },
  { name: "March", base: 12, admin: 23, total: 35 },
  { name: "April", base: 23, admin: 12, total: 35 },
  { name: "May", base: 34, admin: 23, total: 57 },
  { name: "June", base: 45, admin: 34, total: 79 },
  { name: "July", base: 56, admin: 45, total: 101 },
  { name: "August", base: 67, admin: 56, total: 123 },
  { name: "September", base: 78, admin: 67, total: 145 },
  { name: "October", base: 89, admin: 78, total: 167 },
  { name: "November", base: 100, admin: 89, total: 189 },
  { name: "December", base: 111, admin: 100, total: 211 },
]

const reportsPerUserData = [
  { name: "January", average: 2.5, total: 25 },
  { name: "February", average: 1.7, total: 53 },
  { name: "March", average: 3.1, total: 35 },
  { name: "April", average: 2.5, total: 35 },
  { name: "May", average: 2.9, total: 57 },
  { name: "June", average: 3.3, total: 79 },
  { name: "July", average: 3.7, total: 101 },
  { name: "August", average: 4.1, total: 123 },
  { name: "September", average: 4.5, total: 145 },
  { name: "October", average: 4.9, total: 167 },
  { name: "November", average: 5.3, total: 189 },
  { name: "December", average: 5.7, total: 211 },
]

const totalReportsData = [
  { name: "January", total: 25 },
  { name: "February", total: 53 },
  { name: "March", total: 35 },
  { name: "April", total: 35 },
  { name: "May", total: 57 },
  { name: "June", total: 79 },
  { name: "July", total: 101 },
  { name: "August", total: 123 },
  { name: "September", total: 145 },
  { name: "October", total: 167 },
  { name: "November", total: 189 },
  { name: "December", total: 211 },
]