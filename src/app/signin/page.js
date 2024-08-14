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
  
 <form>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" />
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" />
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>

  
    <div className="row">
      <div className="col-md-14  bg-white p-4">
        © copy Gree
      </div>
    </div>
  </div>
    </>
    );
  }