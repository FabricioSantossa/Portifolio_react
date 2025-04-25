import styles from './style.module.css';

const Home = () => { 
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Home</h1>
            <p className={styles.description}>Welcome to the home page!</p>
        </div>
    );
  }
export default Home;