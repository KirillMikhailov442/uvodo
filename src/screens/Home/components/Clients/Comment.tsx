import styles from './Clients.module.scss';

import { FC, HTMLAttributes } from 'react';

interface CommentProps extends HTMLAttributes<HTMLLIElement> {
  comment: string;
  author: string;
  profession: string;
}

const Comment: FC<CommentProps> = ({
  comment,
  author,
  profession,
  ...props
}) => {
  return (
    <li className={styles.comment} {...props}>
      <div className={styles.commentContent}>
        <p className={styles.commentText}>{comment}</p>
        <p className={styles.commentAuthor}>{author}</p>
        <p className={styles.commentProfession}>{profession}</p>
      </div>
    </li>
  );
};

export default Comment;
