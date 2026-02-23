export default function Loader({ titleClassName = 'loaderh1 sm:text-[30px] text-[15px] text-center w-full' }) {
  return (
    <section>
      <div style={{ zIndex: 9999 }} className="loader">
        <div className="body">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="base">
            <span></span>
            <div className="face"></div>
          </div>
        </div>
        <div className="longfazers">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h1 className={titleClassName}>Ready To Explore</h1>
      </div>
    </section>
  );
}
