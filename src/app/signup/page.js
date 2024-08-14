export default function Home() {
    return(
    <>
    <div className="text-center ">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand"  href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/2/27/Yorushika_Logo.jpg" alt="" width={70}></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://getbootstrap.com/docs/5.3/examples/album/">Service</a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link" href="https://getbootstrap.com/docs/5.3/examples/sign-in/">Contact</a>
        </li>
      </ul>
      <nav className="navbar bg-body-tertiary">
  <form className="container-fluid justify-content-start ">
    <button className="btn btn-outline-success me-2" type="button" ><a class="nav-link" href="/signin">signin</a></button>
    <button className="btn btn-outline-success me-2" type="button" ><a class="nav-link"  href="/signup">signup</a></button>
  </form>
</nav>
    </div>
  </div>
</nav>

        <div>
  <div classname="row mb-3">
    <div classname="col-md-10 text-left justify-content-md-center container-fluid bg-dark text-white p-1">
      <p className="h1">การสมัครสมาชิก</p>
    </div>
  </div>
  <div className="row">
    <div className="col">
      <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
    </div>
  </div>
  <form className="row g-3">
    <div className="col-md-6">
      <label htmlFor="inputEmail4" className="form-label">Email</label>
      <input type="email" className="form-control" id="inputEmail4" />
    </div>
    <div className="col-md-6">
      <label htmlFor="inputPassword4" className="form-label">Password</label>
      <input type="password" className="form-control" id="inputPassword4" />
    </div>
    <div className="col-12">
      <label htmlFor="inputAddress" className="form-label">Address</label>
      <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
    </div>
    <div className="col-12">
      <label htmlFor="inputAddress2" className="form-label">Address 2</label>
      <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
    </div>
    <div className="col-md-6">
      <label htmlFor="inputCity" className="form-label">City</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="col-md-4">
      <label htmlFor="inputState" className="form-label">State</label>
      <select id="inputState" className="form-select">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="col-md-2">
      <label htmlFor="inputZip" className="form-label">Zip</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
    <div className="col-12">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck" />
        <label className="form-check-label" htmlFor="gridCheck">
          กดยืนยันการสมัคร
        </label>
      </div>
    </div>
    <div className="col-12">
      <button type="submit" className="btn btn-primary">signup</button>
    </div>
  </form>
</div>


    <div className="col-md-14  bg-white p-4">
      © copy Gree
    </div>
      </div>
    </>
  );
}