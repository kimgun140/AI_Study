import styles from "./CSSModule.module.css";
// import classNames from './classnames/bind';
//const cx = classNames.bind(styles); 미리 styles에서 클래스를 받아오도록 설정하고
const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      {/* <div className={cx('wrapper', 'inverted')} */}
      안녕하세요, 저는 <span className="something">Css Module</span>
    </div>
  );
};
export default CSSModule;
//
