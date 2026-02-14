// Grid Overlay Component
const GridOverlay = () => (
  <div className="absolute inset-0 pointer-events-none opacity-10">
    <div className="h-full w-full" 
         style={{
           backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
           backgroundSize: '50px 50px'
         }} 
    />
  </div>
);


export default GridOverlay;
