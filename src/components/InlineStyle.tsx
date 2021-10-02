export const InlineStyle = () => {

  const containerStyle = {
    border:　"solid 2px #392eff",
    borderRadius : "20px",
    // 内側のスペース
    padding : "8px",
    //　外側のスペース
    margin: "8px",
    // 横並び
    display: "flex",
    justifyCOntent: "space-arround",
    // あらいんアイテム
    alignItems: "center",
  }
  const titleStyle = {
margin: 0,
color: "#3d84a8",
  }
  const buttonStyle = {
backgroundColor: "#abedd8",
border:"none",
paddding: "8px",
borderRadius: "8px",

  }


  return(
<div style={containerStyle}>
  <p style={titleStyle}>- Inleine Styles -</p>
  <button style={buttonStyle}> Fight! </button>
</div>

  )


}