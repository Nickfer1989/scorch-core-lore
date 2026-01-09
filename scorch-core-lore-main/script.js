// --- VARIABLES GLOBALES ---
const btnRonin = document.querySelector('.btn-ronin');
const egg = document.getElementById('main-egg');
let userAddress = null;
let provider, signer, contract;

// --- CONFIGURACIÓN DEL CONTRATO (AJUSTA ESTO) ---
const CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000"; 
const CONTRACT_ABI = [
    "function mint() public payable",
    "function totalSupply() view returns (uint256)"
];

// --- 1. LÓGICA DE SCROLL Y ANIMACIÓN ---
window.addEventListener('scroll', () => {
    const scrollVal = window.scrollY;
    const heroUI = document.getElementById('hero-ui');
    
    // Animación del huevo (Zoom)
    if (egg) {
        let zoom = 1 + (scrollVal * 0.0005); // Ajustado para que el zoom sea suave
        egg.style.transform = `scale(${zoom})`;
    }

    // Desvanecimiento del UI inicial
    if (scrollVal < 1000) {
        let opacity = 1 - (scrollVal / 800);
        if(heroUI) {
            heroUI.style.opacity = opacity < 0 ? 0 : opacity;
            heroUI.style.display = opacity <= 0 ? "none" : "flex";
        }
    }
});

// --- 2. CONEXIÓN A RONIN WALLET (Ethers v6 compatible) ---
async function connectWallet() {
    if (typeof window.ronin !== 'undefined') {
        try {
            // Inicializar Provider y Signer con Ethers v6
            provider = new ethers.BrowserProvider(window.ronin.provider);
            const accounts = await provider.send("eth_requestAccounts", []);
            
            userAddress = accounts[0];
            signer = await provider.getSigner();
            
            // Instanciar Contrato
            contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

            updateUI(userAddress);
            console.log("Wallet conectada:", userAddress);

        } catch (error) {
            console.error("Error al conectar:", error);
            if (error.code === 4001) alert("Conexión rechazada por el usuario.");
        }
    } else {
        alert("Ronin Wallet no detectada.");
        window.open("https://wallet.roninchain.com/", "_blank");
    }
}

// --- 3. ACCIÓN DEL CONTRATO (MINT) ---
async function handleAction() {
    // Si no está conectado, conectamos primero
    if (!userAddress) {
        await connectWallet();
        return; 
    }

    try {
        btnRonin.innerText = "FORJANDO...";
        
        // Ejecutar Mint (Cambiado a sintaxis v6)
        const tx = await contract.mint({ 
            value: ethers.parseEther("0.1") // v6 usa ethers.parseEther directamente
        });

        console.log("Transacción enviada:", tx.hash);
        await tx.wait(); // Esperar confirmación
        
        alert("¡Éxito! Has despertado el poder del núcleo.");
        btnRonin.innerText = "PODER DESPERTADO";
        
    } catch (error) {
        console.error("Error en transacción:", error);
        alert("La forja ha fallado.");
        updateUI(userAddress); // Reset texto
    }
}

// --- 4. LISTENERS Y UTILIDADES ---

function updateUI(address) {
    if (!address) return;
    const shortAddr = `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
    btnRonin.innerText = "PIONERO: " + shortAddr.toUpperCase();
    btnRonin.classList.add('connected'); // Recomiendo manejar el estilo por clase CSS
    btnRonin.style.borderColor = "#00ffcc";
    btnRonin.style.color = "#00ffcc";
}

if (btnRonin) {
    // Cambiamos el listener para que decida si conecta o ejecuta acción
    btnRonin.addEventListener('click', handleAction);
}

// Manejo de cambios en la Wallet
if (window.ronin?.provider) {
    window.ronin.provider.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
            userAddress = accounts[0];
            updateUI(userAddress);
        } else {
            location.reload(); // Reiniciar si desconectan
        }
    });
}

// Partículas (tu función original intacta)
function initParticles() {
    const container = document.getElementById('particle-container');
    if(!container) return;
    setInterval(() => {
        const p = document.createElement('div');
        p.className = 'particle';
        const isFire = Math.random() > 0.5;
        const color = isFire ? '#ff4500' : '#00d4ff';
        const size = Math.random() * 5 + 2 + 'px';
        p.style.width = size; p.style.height = size;
        const side = Math.random() > 0.5 ? (Math.random() * 20) : (80 + Math.random() * 20);
        p.style.left = side + '%';
        p.style.top = '-5%';
        p.style.backgroundColor = color;
        p.style.boxShadow = `0 0 12px ${color}`;
        p.style.animationDuration = Math.random() * 5 + 5 + 's';
        container.appendChild(p);
        setTimeout(() => p.remove(), 10000);
    }, 100);
}
window.addEventListener('load', initParticles);