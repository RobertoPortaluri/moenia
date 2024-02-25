// next.config.mjs
const nextConfig = {
    // Sovrascrivi le opzioni di generazione HTML predefinite
    async headers() {
      return [
        // Definisci un'intestazione personalizzata per indicare che il file HTML deve essere servito come homepage
        {
            source: '/',
            headers: [
              {
                key: "Location",
                value: "/Home",
              },
            ],
        },
      ];
    },
  };
  
  export default nextConfig;
  