import React, { useContext } from "react";
import { BorrowedBooksContext } from "../BorrowedBooksProvider";

const KoleksiPeminjaman = () => {
  const { borrowedBooks } = useContext(BorrowedBooksContext);

  return (
    <div>
      <h2>Koleksi Peminjaman</h2>
      <ul>
        {borrowedBooks.map((books) => (
          <li key={books.id_buku}>
            {books.judul_buku}
            <p>{books.deskripsi}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KoleksiPeminjaman;
