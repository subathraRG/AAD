import { useEffect, useState } from "react";
import "../css/home.css";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="wraper">
        {/*  */}
        <Navbar />
        {/*  */}

        <section>
          <div className="section-img">
            <div className="texto">
              <h1> Manejando nuevo paradigma economico</h1>
              <p>
                {" "}
                Al contrario del pensamiento popular, el texto de Lorem Ipsum no
                es simplemente texto aleatorio. Tiene sus raices en una pieza
                cl´sica de la literatura del Latin, que data del año 45 antes de
                Cristo, haciendo que este adquiera mas de 2000 años de
                antiguedad. Richard McClintock.{" "}
              </p>
            </div>
            <div className="image">
              <img src="https://images.unsplash.com/photo-1606787620607-7ccc2a775faa?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDc0Mzc0NTJ8&ixlib=rb-4.0.3&q=85" />
            </div>
          </div>
        </section>
        <section>
          <div className="section-tres-columnas">
            <div className="card yellow">
              <svg
                className="icon-card"
                viewBox="0 0 352 512"
                width={100}
                title="lightbulb"
              >
                <path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z" />
              </svg>
              <div className="title-card">Cuentas Hogarenias</div>
              <div className="p-card">
                shorthand property that defines both the logical inline start
                and end margins of an element
              </div>
              <button className="btn-card">
                <span>Ver mas</span>{" "}
                <svg
                  viewBox="0 0 448 512"
                  width={100}
                  title="long-arrow-alt-right"
                >
                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                </svg>
              </button>
            </div>
            <div className="card green">
              <svg
                className="icon-card"
                viewBox="0 0 576 512"
                width={100}
                title="credit-card"
              >
                <path d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z" />
              </svg>
              <div className="title-card">Saldo Tarjeta</div>
              <div className="p-card">
                shorthand property that defines both the logical inline start
                and end margins of an element
              </div>
              <button className="btn-card">
                <span>Ver mas</span>{" "}
                <svg
                  viewBox="0 0 448 512"
                  width={100}
                  title="long-arrow-alt-right"
                >
                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                </svg>
              </button>
            </div>
            <div className="card violet">
              <svg
                className="icon-card"
                viewBox="0 0 640 512"
                width={100}
                title="user-clock"
              >
                <path d="M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z" />
              </svg>
              <div className="title-card">Gestion Personal</div>
              <div className="p-card">
                shorthand property that defines both the logical inline start
                and end margins of an element
              </div>
              <button className="btn-card">
                <span>Ver mas</span>{" "}
                <svg
                  viewBox="0 0 448 512"
                  width={100}
                  title="long-arrow-alt-right"
                >
                  <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="section-img">
            <div className="texto">
              <h1> No confies. Verifica tu saldo.</h1>
              <p>
                {" "}
                Al contrario del pensamiento popular, el texto de Lorem Ipsum no
                es simplemente texto aleatorio. Tiene sus raices en una pieza
                cl´sica de la literatura del Latin, que data del año 45 antes de
                Cristo, haciendo que este adquiera mas de 2000 años de
                antiguedad. Richard McClintock.{" "}
              </p>
              <button className="brutal-btn"> VER MAS</button>
            </div>
            <div className="image">
              <img
                className="clip-path-square"
                src="https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDc0NDg5NjB8&ixlib=rb-4.0.3&q=85"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="section-img green">
            <div className="texto">
              <h1>Por que gift?</h1>
              <p>
                {" "}
                Es una estructura masiva con características llamativas,
                construida a partir de materiales sin refinar. La tipografía es
                sumamente monótona a través de todo el sitio y los textos suelen
                estar demasiados cercanos unos de otros. Algunos elementos se
                superponen pero pareciera que no es de manera intencional, sino
                como un error de diseño.{" "}
              </p>
              <div className="image-video">
                <img
                  className="borde-negro"
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDc1MjQ0MzR8&ixlib=rb-4.0.3&q=85"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section-img reset-section centrado yellow">
            <h1> Unete al gift ahora</h1>
            <p className="font-w-500">
              {" "}
              Al contrario del pensamiento popular, el texto de Lorem Ipsum no
              es simplemente texto aleatorio. Tiene sus raices en una pieza
              cl´sica de la literatura del Latin, que data del año 45 antes de
              Cristo, haciendo que este adquiera mas de 2000 años de antiguedad.
              Richard McClintock.{" "}
            </p>
            <button className="brutal-btn blanco"> UNETE AHORA</button>
          </div>
        </section>
      </div>
    </>
  );
}
