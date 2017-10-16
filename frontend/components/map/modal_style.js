const modalStyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.5)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    width           : '60vw',
    marginLeft      : '13vw',
    height          : 'auto',
    border          : '1px solid #ccc',
    padding         : '20px 50px 50px 50px',
    overflow        : 'none',
    zIndex          : 11,
    backgroundColor : 'rgba(255, 255, 255, 0.8)',
    display         : 'flex',
    flexDirection   : 'column'

  }
};

export default modalStyle;
