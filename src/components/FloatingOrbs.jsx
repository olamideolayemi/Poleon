// Floating Orb Background Component
const FloatingOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float-slow" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-float-slower" />
    <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-float" />
  </div>
);


export default FloatingOrbs;
