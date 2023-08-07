import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import { useReviewsContext } from "../../context/reviews_context";
import Review from "../Review/Review";
import styles from "./Reviews.module.css";
import instance from "../../axios";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

const Reviews = () => {
  const {
    filtered_reviews: products,
    sort,
    updateSort,
    setProduct,
    open_new_avaliation,
    openNewAvaliation,
    closeNewAvaliation,
  } = useReviewsContext();
  const { single_product: product, fetchSingleProduct } = useProductsContext();

  const [formulario, setFormulario] = useState({
    title: "",
    rating: 0,
    comment: "",
  });

  const handleChanges = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const { id } = useParams();
  useEffect(() => {
    // https://e-commerce-node-5wf2.onrender.com/api/v1/products/${id}
    const fetchProduct = async () => {
      const response = await instance.get(
        `http://localhost:5000/api/v1/products/${id}`
      );
      setProduct(response.data);
    };
    fetchProduct();
    fetchSingleProduct(`http://localhost:5000/api/v1/products/${id}`);
    setProduct([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeNewAvaliation();
    }
  };

  const submitCreateReview = async (e) => {
    e.preventDefault();
    const review = {
      product: id,
      ...formulario,
    };
    try {
      const response = await instance.post("/reviews", review);
      if (response.status === 201) {
        setProduct((previous) => [...previous.productReviews, response.data]);
        toast.success("Produto avaliado com sucesso.");
        setTimeout(() => {
          closeNewAvaliation();
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <main className={styles.reviewsContainer}>
      {!products && !product ? (
        <div></div>
      ) : (
        <>
          {open_new_avaliation && (
            <div className={styles.dv} onClick={handleOutsideClick}>
              <form onSubmit={submitCreateReview}>
                <div className={styles.header}>
                  <h3>Avalie o produto</h3>
                  <button
                    type="button"
                    className={styles.close}
                    onClick={closeNewAvaliation}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
                <div className={styles.wraper}>
                  <label className={styles.label} htmlFor="titulo">
                    Titulo
                  </label>
                  <input
                    className={styles.input}
                    id="titulo"
                    name="title"
                    type="text"
                    placeholder={"Digite o title da avalição"}
                    onChange={handleChanges}
                  />
                </div>

                <div className={styles.wraper}>
                  <label className={styles.label} htmlFor="nota">
                    Dê uma nota
                  </label>
                  <input
                    className={styles.input}
                    name="rating"
                    id="nota"
                    type="number"
                    placeholder={"Informe a nota (0 a 5)"}
                    onChange={handleChanges}
                  />
                </div>

                <div className={styles.wraper}>
                  <label className={styles.label} htmlFor="comentario">
                    Deixe sua avaliação completa
                  </label>
                  <textarea
                    className={styles.input}
                    name="comment"
                    id="comentario"
                    type="number"
                    placeholder="Digite sua avalição do produto"
                    onChange={handleChanges}
                  />
                </div>
                <button type="submit" className="btn">
                  Avaliar produto
                </button>
              </form>
            </div>
          )}
          <div className={styles.headerReviews}>
            <button type="submit" className="btn" onClick={openNewAvaliation}>
              Avaliar produto
            </button>
            <div>
              <form className={styles.formSort}>
                <label htmlFor="sort">Ordenar avaliações</label>
                <select
                  name="sort"
                  id="sort"
                  value={sort}
                  onChange={updateSort}
                  className={styles.sortInput}
                >
                  <option value="maior-nota">avaliacao (maior)</option>
                  <option value="menor-nota">avaliacao (menor)</option>
                  <option value="name-a">nome (a-z)</option>
                  <option value="name-z">nome (z-a)</option>
                </select>
              </form>
            </div>
          </div>
          <div className={styles.infos}>
            <h4>
              Média de avaliação:{" "}
              {product.mediaReviews?.toFixed(1).replace(".", ",")}
            </h4>
            <h4>Quantidade de avaliações: {product.qtdReviews}</h4>
          </div>
          <div>
            {products &&
              products.map((review) => {
                return <Review key={review._id} review={review} />;
              })}
          </div>
        </>
      )}
    </main>
  );
};

export default Reviews;
