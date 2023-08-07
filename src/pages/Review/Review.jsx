import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import styles from "./Review.module.css";
import { formatDistanceToNow, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

const Review = ({ review }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {review.rating >= index + 1 ? (
          <BsStarFill />
        ) : review.rating >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  console.log(review.createdAt);
  const createdAtDate = review?.createdAt ? new Date(review.createdAt) : null;

  const publishedDateFormated = format(
    createdAtDate,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  console.log(publishedDateFormated);

  const publishedDateRelatveToNow = formatDistanceToNow(createdAtDate, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <section className={styles.review}>
      <h3>{review?.title}</h3>
      <p className={styles.name}>{review?.user.name}</p>
      <div className={styles.container}>
        <div className={styles.nameContainer}>
          <span className={styles.stars}>{tempStars}</span>
        </div>
        <div>
          <time
          className={styles.data}
            title={publishedDateFormated}
            dateTime={createdAtDate.toISOString()}
          >
            {publishedDateRelatveToNow}
          </time>
        </div>
      </div>
      <p className={styles.comment}>{review?.comment}</p>
    </section>
  );
};

export default Review;
