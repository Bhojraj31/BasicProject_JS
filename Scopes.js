function scope() {
  if (true) {
    var a = "JavaScript";
    let b = "React";
    const c = "NodeJS";
    console.log(a);
    console.log(b);
    console.log(c);
  }
  console.log("OutSide If Statement");
  console.log(a);
  console.log(b);
  console.log(c);
}
scope();
