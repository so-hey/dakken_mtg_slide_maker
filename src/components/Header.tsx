"use client";

import { useProps } from "@/contexts/PropsContext";

export default function Header() {
  const { currentEditor, isWorking } = useProps();
  return (
    <header className="navbar navbar-expand-lg bd-navbar sticky-top navbar-dark bg-dark">
      <nav className="container-fluid">
        <div className="my-container">
          <div className="d-flex justify-content-between">
            <div className="p-2 navbar-brand">
              <a href="/">Dakken-MTG-Slide-Maker</a>
            </div>
            <div className="p-2 navbar-brand">
              {isWorking ? (
                currentEditor === "template" ? (
                  <button>edit markdown</button>
                ) : (
                  <button>edit template</button>
                )
              ) : (
                <>
                  <button>edit markdown</button>
                  <button>edit template</button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
