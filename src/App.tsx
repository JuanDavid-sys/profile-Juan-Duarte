/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Intro, Navbar, About, Experience, Projects, TechStack, Contact, Footer } from "./components/Portfolio";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 selection:bg-brand-500/30 overflow-x-hidden">
      <Intro />
      <Navbar />
      <main>
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
