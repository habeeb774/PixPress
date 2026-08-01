/** يطبّق الوضع الليلي قبل أول رسم لتفادي وميض الشاشة البيضاء */
export default function ThemeScript() {
  const code = `(function(){try{var s=localStorage.getItem("pixpress-theme");var d=s?s==="dark":matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
