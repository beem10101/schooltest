import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">เว็บไซต์เว็คกิจกรรม5ส</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ห้องทั้งหมด
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="M/M6">ม.6</a></li>
            <li><a class="dropdown-item" href="/M5">ม.5</a></li>
            <li><a class="dropdown-item" href="/M4">ม.4</a></li>
            <li><a class="dropdown-item" href="/M3">ม.3</a></li>
            <li><a class="dropdown-item" href="/M2">ม.2</a></li>
            <li><a class="dropdown-item" href="/M1">ม.1</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar