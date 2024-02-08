import * as mdIcon from "react-icons/md";
import * as faIcon from "react-icons/fa";
import * as ioIcon from "react-icons/io";
// export interface MenuItem {
//   title: string;
//   icon?: string;
//   path?: string;
//   childrens?: MenuItem[];
// }

import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

// interface AntMenu {
//   label: React.ReactNode;
//   key: React.Key;
//   icon?: React.ReactNode;
//   children?: AntMenu[];
//   type?: "group";
// }

export const antItems: MenuProps['items'] = [
  {
    label: "Hotel",
    key: 1,
    icon: <mdIcon.MdOutlineHomeWork />,
    children:undefined

  },
  {
    label: "Room",
    key: 2,
    icon: <mdIcon.MdOutlineHomeWork />,
    children: [
      {
        label: "Add Room",
        key: 3,
      },
      {
        label: "View Room",
        key: 5,
      },
    ],
  },
  {
    label: "Booking",
    key: 4,
    icon: <mdIcon.MdOutlineHomeWork />,
  },
];

// export const menuItems: MenuItem[] = [
//   {
//     title: "General",
//     icon: "bi-gear-fill",
//     childrens: [
//       {
//         title: "Home",
//         icon: "bi-house-fill",
//         path: "/",
//       },
//       {
//         title: "About",
//         icon: "bi-info-circle-fill",
//         path: "/about",
//       },
//       {
//         title: "Contact",
//         icon: "bi-phone-fill",
//         childrens: [
//           {
//             title: "Facebook",
//             icon: "bi-facebook",
//           },
//           {
//             title: "Twitter",
//             icon: "bi-twitter",
//           },
//           {
//             title: "Instagram",
//             icon: "bi-instagram",
//           },
//         ],
//       },
//       {
//         title: "FAQ",
//         icon: "bi-question-circle-fill",
//       },
//     ],
//   },
//   {
//     title: "Account",
//     icon: "bi-info-circle-fill",
//     childrens: [
//       {
//         title: "Login",
//         path: "/login",
//       },
//       {
//         title: "Register",
//         path: "/register",
//       },
//       {
//         title: "Forgot Password",
//         path: "/forgot-password",
//       },
//       {
//         title: "Reset Password",
//         path: "/reset-password",
//       },
//     ],
//   },
//   {
//     title: "Profile",
//     icon: "bi-person-fill",
//     childrens: [
//       {
//         title: "Profile",
//         path: "/profile",
//       },
//       {
//         title: "Settings",
//         childrens: [
//           {
//             title: "Account",
//             path: "/settings/account",
//           },
//           {
//             title: "Billing",
//             childrens: [
//               {
//                 title: "Payment",
//                 path: "/settings/billing/payment",
//               },
//               {
//                 title: "Subscription",
//                 path: "/settings/billing/subscription",
//               },
//             ],
//           },
//           {
//             title: "Notifications",
//             path: "/settings/notifications",
//           },
//         ],
//       },
//       {
//         title: "Logout",
//         path: "/logout",
//       },
//     ],
//   },
//   {
//     title: "Advance",
//     icon: "bi-view-list",
//     childrens: [
//       {
//         title: "Search",
//         path: "/search",
//       },
//       {
//         title: "History",
//         path: "/history",
//       },
//     ],
//   },
//   {
//     title: "Support",
//     icon: "bi-question-circle-fill",
//     path: "/support",
//   },
//   {
//     title: "Report Bug",
//     icon: "bi-bug",
//     path: "/report-bug",
//   },
// ];
