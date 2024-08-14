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
  
 <div>
  <div className="card mb-3">
    <img src="https://former-cdn.cinra.net/uploads/img/column/202101-yorushika_gtmnm_l_full.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <p className="card-text">เป็นกลุ่มดนตรีร็อกญี่ปุ่นที่ก่อตั้งขึ้นในปี ค.ศ. 2010 สังกัดค่ายเพลงยูนิเวอร์แซลมิวสิกเจแปน (Universal Music Japan) สมาชิกประกอบด้วย นาบูนะ (N-buna) อดีตโปรดิวเซอร์ดนตรีโวคาลอยด์ และ Suis นักร้องหญิง ทั้งคู่ไม่เคยเปิดเผยใบหน้าต่อสาธารณะและจัดคอนเสิร์ตจำนวนไม่มาก นับมาจนถึงปัจจุบัน โยรูชิกะจัดคอนเสิร์ตเพียงสองครั้ง ครั้งแรกในเดือนกรกฎาคม ค.ศ. 2010 และอีกครั้งในเดือนสิงหาคม ค.ศ. 2019</p>
    </div>
  </div>

</div>

</div>

    
  <div className="row ">
  <div className="card" style={{width: '39.6rem'}}>
  <img src="https://linkstorage.linkfire.com/medialinks/images/1ef524da-3bd6-497b-8ea2-241195a4144d/artwork-440x440.jpg" className="card-img-top" alt="..." />
</div>

<div className="card" style={{width: '39.6rem'}}>
  <img src="https://linkstorage.linkfire.com/medialinks/images/afe57133-cbcd-4c8f-b6b5-d27997acf7d4/artwork-440x440.jpg" className="card-img-top" alt="..." />
</div>
    
<div className="card" style={{width: '39.6rem'}}>
  <img src="https://linkstorage.linkfire.com/medialinks/images/baee1719-815f-44c4-b15e-22bd46487867/artwork-440x440.jpg" className="card-img-top" alt="..." />
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