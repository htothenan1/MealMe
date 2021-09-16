/* eslint-disable no-unused-vars */

import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </div>
  );
}
