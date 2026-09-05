// PROPERLY NAMED IMAGE PROMPT DATA
const images = [
    {
        id: 1,
        title: "Triptych Window Silhouette",
        category: "Cinematic",
        image: "images/image-6.png",
        prompt: `Create a photorealistic 3:4 vertical triptych collage featuring the SAME PERSON from the attached reference image, appearing consistently across three equally sized frames stacked vertically. Preserve their recognizable hairstyle, body proportions, overall appearance and natural characteristics from the reference, while keeping the presentation completely gender-neutral.
FRAME 1 — WINDOW LIGHT
Place the person beside a bedroom window, body turned slightly away from the camera. One arm is naturally raised, with the forearm covering the eyes and most of the upper face. Keep the head slightly lowered and the posture relaxed, creating a subtle mysterious mood.
FRAME 2 — BEDROOM POSE
Show the same person sitting casually on the edge of a bed, leaning slightly forward. One hand naturally moves through their hair while the head is lowered, completely hiding the face. Keep the posture relaxed and candid.
FRAME 3 — LOOKING AWAY
Capture the person from a side/rear three-quarter angle while they face toward the window. One hand rests casually behind or over the back of the head. Use the angle and hair to keep the face concealed naturally.
OUTFIT
Dress the person in an oversized cream/off-white textured top with a relaxed neckline and loose dark charcoal trousers or bottoms. Keep the styling gender-neutral and naturally suited to the person in the reference image. Add a minimal silver pendant, subtle bracelet and simple dark watch. Modern, understated and effortlessly fashionable.
ENVIRONMENT & LIGHTING
Use a minimal warm-toned bedroom with beige/cream walls, subtle framed photographs, dark bedding and soft natural sunlight passing through blinds. Create beautiful rectangular window-light patterns across the wall and subject, producing a warm cinematic atmosphere.
PHOTOGRAPHY
Ultra-realistic smartphone/editorial photography, authentic skin texture, realistic hair and hands, natural fabric detail, shallow depth of field, subtle cinematic film grain, warm muted tones, soft highlights and deep shadows. Keep the composition slightly imperfect and candid rather than looking like a commercial studio shoot.
LAYOUT & CONSISTENCY
The final canvas must be 3:4 portrait orientation, divided into three equal-sized horizontal frames, each occupying exactly one-third of the total image height. Keep small, clean separations between the frames if appropriate. All three frames must feel like photographs from the same shoot, with consistent person, hairstyle, clothing, accessories, lighting and overall color treatment.
The face must remain hidden in ALL THREE frames. Do not show recognizable facial features, visible eyes or a clear identity. No mirrors or reflections revealing the face.
No text, watermark, logos, excessive retouching, plastic-looking skin, distorted anatomy, unnatural hands or artificial AI-looking details.`
    },
    {
        id: 2,
        title: "Midnight Solitude",
        category: "Cinematic",
        image: "images/image-5.png",
        prompt: `Ultra-realistic cinematic nighttime portrait of an adult woman in a dimly lit luxury hotel bedroom, positioned beside a large floor-to-ceiling window overlooking a city at night. She is seated/standing close to the camera with her upper body slightly turned, one shoulder angled toward the camera, head gently tilted to the side, chin slightly raised, eyes softly closed or looking downward, lips slightly parted, with a calm, dreamy, subtly melancholic expression. Her long, naturally tousled dark hair falls heavily around her face and over one shoulder, with loose strands partially covering her eyes and cheeks. She wears a delicate black lace camisole with thin spaghetti straps and a loose black satin robe casually slipping down one shoulder. Warm light from a large bedside lamp on the left softly illuminates her face, shoulder, and skin, while cool blue-black city lights glow through the window behind her. Deep shadows, warm-and-cool contrast, blurred city bokeh, intimate late-night atmosphere, natural skin texture, realistic hair strands, soft film grain, subtle halation, muted dark tones, shallow depth of field, candid editorial photography, 50mm lens, f/1.8, photorealistic.`
    },
    {
        id: 3,
        title: "Crimson Studio Editorial",
        category: "Fashion Portrait",
        image: "images/image-2.png",
        prompt: `A cinematic close-up portrait of a stylish young man with medium-length messy wavy black hair, light stubble with a neatly trimmed beard and mustache, wearing slim rectangular black sunglasses and a small silver hoop earring in his left ear. He has a warm confident smile showing white teeth. He is dressed in a black ribbed knit crew-neck sweater. The background is a deep crimson red studio backdrop with a dramatic red rim light illuminating the right side of his hair and shoulder, while soft warm key lighting highlights the front of his face. High-end fashion editorial photography, luxury magazine cover aesthetic, ultra-realistic skin texture, sharp focus, shallow depth of field, professional studio lighting, rich contrast, moody atmosphere, 85mm portrait lens, f/1.8, photorealistic, 8K, premium color grading, minimal composition.`
    },
    {
        id: 4,
        title: "Molten Silver Waves",
        category: "Surreal 3D",
        image: "images/image-3.png",
        prompt: `Large, flowing liquid chrome/silver metal formations with an ultra-polished mirror finish. The material looks like molten reflective silver, thick and fluid, frozen in dramatic motion. Create smooth, organic tendrils, ribbons, tubes, waves, loops, curls, and elongated streams that twist and bend naturally.

The silver liquid should have a perfectly smooth metallic surface, extremely high reflectivity, realistic mirror-like highlights, strong environmental reflections, and subtle distorted reflections across its curved surface. It should feel like heavy liquid metal, not plastic, glass, chrome pipes, or solid sculptures.

The formations should vary in thickness, with some massive flowing structures and some thin elegant tendrils. They should stretch, drip, merge, split, curl around surfaces, and pool naturally, creating an organic surreal-metal effect. Smooth rounded edges, realistic fluid tension, believable weight, and physically convincing reflections.

Key visual: hyper-realistic molten chrome / liquid silver, mirror-polished, seamless flowing shapes, sculptural but fluid, surreal yet physically believable, cinematic reflections, extremely detailed metallic surface.`
    },
    {
        id: 5,
        title: "Rainy Mountain G-Wagon",
        category: "Automotive",
        image: "images/image-4.png",
        prompt: `Create a photorealistic vertical 9:16 luxury lifestyle photograph matching the composition and mood of the reference image.

A young stylish man is standing beside a black Mercedes-Benz G-Class (G-Wagon) on a wet road during a gloomy, rainy mountain setting. Replace the Defender completely with a modern black G-Wagon, keeping the vehicle large and prominent on the left side of the frame. The G-Wagon should have its iconic boxy silhouette, upright windshield, squared body, distinctive round headlights, vertical grille, Mercedes-Benz emblem, realistic LED lighting, glossy black paint, and accurate premium proportions.

The man is positioned on the right side of the vehicle, casually leaning/standing beside it. He wears an all-black outfit: a black puffer jacket, black oversized T-shirt, loose black pants, white sneakers, black sunglasses, and styled dark hair. His pose is relaxed and confident, looking slightly toward the side rather than directly at the camera.

Environment: rainy mountain location, wet reflective asphalt, misty mountains in the background, subtle greenery, overcast grey sky, light rain falling, realistic water droplets on the G-Wagon.`
    },
    {
        id: 6,
        title: "Urban Crowd Motion Model",
        category: "Fashion Portrait",
        image: "images/image-1.png",
        prompt: `Cinematic color portrait of the person from the reference image, whether girl or boy, styled as a professional fashion model with a serious, confident expression and direct front-facing gaze toward the camera. Keep their identity and facial features recognizable. Wearing a clean, premium off-white linen shirt, standing completely still in the exact center of a moving crowd. The subject is perfectly front-facing with no head tilt or side angle, tack-sharp with crisp facial details, while the surrounding people move rapidly with natural motion blur. Vibrant but cinematic color grading, realistic skin tones, soft natural lighting, dramatic urban atmosphere, shallow depth of field, subtle film grain, high-end editorial photography, dynamic contrast, authentic street photography aesthetic. Vertical 4:5 aspect ratio.`
    }
];

const gallery = document.getElementById("gallery");
const categoriesContainer = document.getElementById("categories");
const search = document.getElementById("search");
const noResults = document.getElementById("noResults");
const modal = document.getElementById("modal");
const toast = document.getElementById("toast");

let activeCategory = "All";

function createCategories() {
    const categories = ["All", ...new Set(images.map(item => item.category))];
    categoriesContainer.innerHTML = "";
    categories.forEach(category => {
        const button = document.createElement("button");
        button.className = "category-btn" + (category === "All" ? " active" : "");
        button.textContent = category;
        button.onclick = () => {
            activeCategory = category;
            document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            displayImages();
        };
        categoriesContainer.appendChild(button);
    });
}

function displayImages() {
    const searchText = search.value.toLowerCase().trim();
    gallery.innerHTML = "";

    const filtered = images.filter(item => {
        const categoryMatch = activeCategory === "All" || item.category === activeCategory;
        const searchMatch = item.title.toLowerCase().includes(searchText) ||
            item.category.toLowerCase().includes(searchText) ||
            item.prompt.toLowerCase().includes(searchText);
        return categoryMatch && searchMatch;
    });

    if (filtered.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    filtered.forEach(item => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
                    <div class="image-container">
                        <img src="${item.image}" alt="${item.title}" loading="lazy">
                    </div>
                    <div class="card-info">
                        <div>
                            <div class="card-category">${item.category}</div>
                            <div class="card-title">${item.title}</div>
                        </div>
                        <div class="buttons">
                            <button class="btn" onclick="openImage(${item.id})">View</button>
                            <button class="btn copy-btn" onclick="copyPrompt(${item.id})">Copy</button>
                        </div>
                    </div>
                `;
        gallery.appendChild(card);
    });
}

search.addEventListener("input", displayImages);

function copyPrompt(id) {
    const item = images.find(img => img.id === id);
    navigator.clipboard.writeText(item.prompt).then(() => {
        showToast();
    });
}

function openImage(id) {
    const item = images.find(img => img.id === id);
    document.getElementById("modalImage").src = item.image;
    document.getElementById("modalTitle").textContent = item.title;
    document.getElementById("modalCategory").textContent = item.category;
    document.getElementById("modalPrompt").textContent = item.prompt;
    modal.dataset.currentId = id;
    modal.classList.add("show");
}

document.getElementById("closeModal").onclick = () => modal.classList.remove("show");
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("show"); });
document.addEventListener("keydown", e => { if (e.key === "Escape") modal.classList.remove("show"); });

document.getElementById("modalCopy").onclick = () => {
    const id = Number(modal.dataset.currentId);
    copyPrompt(id);
};

function showToast() {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1500);
}

createCategories();
displayImages();
