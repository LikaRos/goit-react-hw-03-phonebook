import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export const ContactsList = ({ contactsList, onDelete }) => {
  return (
    <ul>
      {contactsList.map(({ id, name, phone }) => {
        return (
          <li className={styles.item} key={id}>
            <div className={styles.textWrap}>
              <p className={styles.text}>Name: {name}</p>
              <p className={styles.text}>Phone: {phone}</p>
            </div>

            <div className={styles.btnWrap}>
              <button
                className={styles.button}
                type="button"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
