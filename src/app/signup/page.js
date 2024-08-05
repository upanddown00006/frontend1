import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return(
    <>
    <div className="text-center ">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand"  href="#"><img src="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-1/310999359_104386182454658_3734706181317281372_n.jpg?stp=c77.56.213.213a_dst-jpg_s160x160&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=7BF6bX1PYbEQ7kNvgHlfvt8&_nc_ht=scontent.fcnx4-1.fna&oh=00_AYCQxSlwM6kmfWtY6i5g0CLa-ShM8oExWwUOib8_rY38VQ&oe=66913E4F" alt="" width={100}></img></a>
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
      <button className="btn btn-outline-success me-2" type="button" ><a class="nav-link" href="https://getbootstrap.com/docs/5.3/examples/sign-in/">signin</a></button>
      <button className="btn btn-outline-success me-2" type="button" ><a class="nav-link"  href="/signup">signup</a></button>
    </form>
  </nav>
      </div>
    </div>
  </nav>

        <div className="row mb-3">
          <div className="col-md-10 text-left justify-content-md-center container-fluid bg-dark text-white p-1">
            <p class="h1">การสมัครสมาชิก</p>
          </div>
        </div>

        <form className="text-white">
          <div class="row mb-4">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-5">
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>
          </div>
          <div class="row mb-4">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-5">
              <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"></input>
            </div>
            <span id="passwordHelpInline" className="form-text text-white">
              Must be 8-20 characters long.
            </span>
          </div>
          <fieldset class="row mb-3">
            <legend class="col-form-label col-sm-2 pt-0">สมัครการใช้งานเฉพาะ</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"></input>
                <label class="form-check-label" for="gridRadios1">
                  เพื่อใช้ในการศึกษา
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
                <label class="form-check-label" for="gridRadios2">
                  เพื่อใช้ในการส่งรูปแบบ
                </label>
              </div>
              <div class="form-check disabled">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled></input>
                <label class="form-check-label" for="gridRadios3">
                  เพื่อให้เป็นผู้ช่วยในการทำงานร่วมกัน
                </label>
              </div>
            </div>
          </fieldset>
          <div class="row mb-3">
            <div class="col-sm-10 offset-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck1"></input>
                <label class="form-check-label" for="gridCheck1">
                  ยืนยันในการสมัครสมาชิกใหม่
                </label>
              </div>
            </div>
          </div>
          <div className="">
          <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>

        <div className="row">
    <div className="col-md-14  bg-white p-4">
      © copy Gree
    </div>
  </div>git init

      </div>
    </>
  );
}