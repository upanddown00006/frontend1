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

  </div>
  <div className="container-fluid">
  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://lh3.googleusercontent.com/ufS1qifPTVxSR1_xBz6F75iymu07Qdgplp0Qp3uJBWZuSrpgP6GWFkog-99E8bvH6o5xAmnzzNENskFZ=w1440-h600-p-l90-rj" className="d-block w-100  " alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://thonglorpet.com/_content_html_editor_upload/images/0B520ADA-2CE7-3912-A491-13C27A99ECC4.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://thonglorpet.com/_content_html_editor_upload/images/0B520ADA-2CE7-3912-A491-13C27A99ECC4.png" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    
  <div className="row ">
  <div className="card" style={{width: '39.6rem'}}>
  <img src="https://linkstorage.linkfire.com/medialinks/images/2b0f7256-8b5c-440b-bde1-6d68c488afb4/artwork-440x440.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">【配信】Digital Single「忘れてください」</h5>
    <p className="card-text">2024.07.13 RELEASEヨルシカ 配信サイト：</p>
    <a href="https://yorushika.lnk.to/forget_it" className="btn btn-primary">Play</a>
  </div>
</div>

<div className="card" style={{width: '39.6rem'}}>
  <img src="https://linkstorage.linkfire.com/medialinks/images/39f8cf45-99cb-4878-998c-a677d862469d/artwork-440x440.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">【配信】Digital Single「ルバート」</h5>
    <p className="card-text">2024.05.29 RELEASEヨルシカ 配信サイト：</p>
    <a href="https://yorushika.lnk.to/Rubato" className="btn btn-primary">Play</a>
  </div>
</div>
    
<div className="card" style={{width: '39.6rem'}}>
  <img src="https://linkstorage.linkfire.com/medialinks/images/917b2c96-bb0f-4e54-9659-deba14a0f328/artwork-440x440.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">【配信】Digital Single「晴る」</h5>
    <p className="card-text">2024.01.05 RELEASEヨルシカ 配信サイト：</p>
    <a href="https://yorushika.lnk.to/sunny" className="btn btn-primary">Play</a>
  </div>
</div>
  </div>
  <div className="row">
    <div className="col-md-14  bg-white p-4">
      © copy Gree
    </div>
  </div>
</div>
  </>
  );
}