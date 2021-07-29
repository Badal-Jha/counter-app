import React, { Component } from "react";

//stateless functional component//sfc shortcut
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span class="badge rounded-pill bg-light text-dark">
            {props.totalCount}
          </span>
        </a>
      </div>
    </nav>
  );
};

//here there is not state nor methods so we can use functional component insted of class component
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Navbar{" "}
//             <span class="badge rounded-pill bg-light text-dark">
//               {this.props.totalCount}
//             </span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

export default NavBar;
