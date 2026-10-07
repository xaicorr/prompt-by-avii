// PROPERLY NAMED IMAGE PROMPT DATA WITH DYNAMIC PER-IMAGE PROMPTS
const images = [
    {
        id: "bw-denim-motion-series",
        title: "B&W Denim Motion Series",
        category: "Fashion Portrait",
        image: ["images/image-16a.webp", "images/image-16b.webp", "images/image-16c.webp"],
        prompt: [
            `Use my uploaded photo as the exact face/identity reference. Create a photorealistic black-and-white close-up portrait, wearing black sunglasses and a rugged denim jacket. Dramatic side lighting, deep shadows, high contrast, cinematic film grain, dark background with strong flowing motion-blur streaks.`,
            `Use my uploaded photo as the exact face/identity reference. Create a photorealistic black-and-white full-body fashion portrait, wearing a distressed denim jacket, dark ripped loose-fit jeans and black sunglasses. One hand near the face, confident pose, dramatic lighting, high contrast, cinematic grain, dark background with large flowing motion-blur streaks.`,
            `Use my uploaded photo as the exact face/identity reference. Create a photorealistic black-and-white side-profile fashion portrait, wearing a distressed denim jacket, dark ripped loose-fit jeans and black sunglasses. Dramatic side lighting, deep shadows, high contrast, cinematic film grain, dark background with flowing horizontal motion-blur streaks.`
        ]
    },
    {
        id: "pixelated-minecraft-twin",
        title: "Minecraft Pixel Twin",
        category: "Surreal 3D",
        image: "images/image-15.webp",
        prompt: `Create a medium-sized cute pixelated 3D/Minecraft-style version of the person standing beside the original, about 80% of the original person's height, matching the exact outfit, pose, hairstyle, and accessories. Keep the background, lighting, camera angle, and composition unchanged. Unisex, realistic detailed pixel-art style.`
    },
    {
        id: "elevator-line-art-selfie",
        title: "Elevator Line-Art Selfie",
        category: "Cinematic",
        image: "images/image-14.webp",
        prompt: `Use my uploaded photo as the exact face and identity reference. Create a photorealistic aesthetic elevator mirror selfie of me, preserving my facial features, hairstyle, skin tone, body proportions and natural appearance. I’m standing casually inside a modern elevator, taking a mirror selfie with a Samsung Galaxy S24. Beside me, add a beautiful girl drawn entirely as a simple white hand-drawn line-art sketch, standing naturally next to me with headphones and a small shoulder bag. The girl should look like a clean white neon/marker outline naturally integrated into the real elevator scene. Outfit: oversized dark charcoal graphic-free T-shirt, relaxed-fit black trousers, clean white sneakers, minimal silver accessories. Moody warm elevator lighting, realistic reflections, subtle shadows, slightly muted cinematic colors, soft grain, candid Instagram aesthetic, natural proportions, highly realistic photography. Keep the girl as white line art only. No text, no writing, no logos, no extra people.`
    },
    {
        id: "candlelit-tropical-portrait",
        title: "Candlelit Tropical Portrait",
        category: "Cinematic",
        image: "images/image-13.webp",
        prompt: `Use my reference image to preserve my exact face, identity, and natural features. Create an ultra-realistic candid portrait of a person sitting comfortably at an elegant outdoor tropical restaurant at night, surrounded by lush large green banana leaves and dense foliage. Warm ambient candlelight, dark moody background, wooden dining table and woven chairs, an octagonal wall mirror in the background reflecting greenery. Relaxed natural pose, looking directly at the camera, realistic skin texture, authentic photography, subtle warm lighting, shallow depth of field, premium lifestyle aesthetic, smartphone-camera realism, vertical 4:5 composition. Keep the outfit gender-neutral and stylish, with natural fit and no exaggerated body features. Do not change the person's identity or facial structure.`
    },
    {
        id: "royal-enfield-sunset-tour",
        title: "Royal Enfield Mountain Sunset",
        category: "Cinematic",
        image: "images/image-12.webp",
        prompt: `Create a photorealistic cinematic travel photograph inspired by the reference scene. Place me standing casually beside a Royal Enfield Classic motorcycle on a winding mountain road in a lush green hill-station landscape. The motorcycle should be positioned naturally beside me, fully visible, with realistic Royal Enfield Classic proportions, details, chrome components, wheels, engine, fuel tank and exhaust.
Replace my current outfit with a premium black leather jacket, worn naturally and slightly fitted, over a simple dark shirt, paired with dark straight-fit jeans and clean casual boots/shoes. Give me a relaxed, confident travel-photography pose, naturally leaning or resting one hand near the motorcycle while looking slightly away from the camera.
Keep the same overall environment and composition as the reference: a smooth dark mountain road with white edge markings, metal roadside guardrails, dense green tea plantations/vegetation, layered misty mountains and tall trees in the background. Include a distinctive tree near the roadside similar to the reference composition.
The sky should have a dramatic warm pink-orange sunset, with soft clouds and atmospheric haze over the mountains. Create beautiful natural depth between the foreground road, motorcycle, subject, vegetation, and distant hills.
Photography style: ultra-photorealistic travel photography, cinematic natural lighting, realistic skin texture, realistic fabric and leather texture, subtle atmospheric haze, natural shadows, soft sunset highlights, detailed motorcycle, realistic perspective, DSLR photography, 35mm lens, shallow-to-moderate depth of field, high dynamic range, premium editorial travel photograph.
Important: Keep my identity unchanged. Do not alter my facial features. Keep the motorcycle realistic and proportionally correct. No extra people, no text, no logos added artificially, no distorted hands, no distorted motorcycle parts, no cartoon/AI appearance.
Composition: vertical portrait photograph, full-body subject and full motorcycle visible, road and mountain scenery clearly visible, subject naturally integrated into the environment, cinematic balanced framing, highly realistic.`
    },
    {
        id: "bw-editorial-portrait",
        title: "B&W High-Contrast Editorial",
        category: "Fashion Portrait",
        image: "images/image-11.webp",
        prompt: `Photorealistic black-and-white editorial portrait of the person from my reference image, keeping their face, identity, hairstyle, and features consistent. Wearing an oversized black blazer over a black turtleneck, looking slightly upward to the side, soft studio lighting, minimalist white background, strong soft-profile shadow behind them, cinematic high-contrast photography.`
    },
    {
        id: "accidental-candid-selfie",
        title: "Accidental Smartphone Selfie",
        category: "Cinematic",
        image: "images/image-10.webp",
        prompt: `Create an ultra-realistic accidental smartphone selfie of the uploaded person. The photo should look completely unplanned, as if the phone camera was accidentally triggered while the person was moving. Capture the subject mid-motion with noticeable but realistic natural motion blur across the face, hair, and parts of the body, making facial details slightly difficult to identify.

Use imperfect framing, subtle camera shake, uneven composition, and realistic motion streaks to recreate the feel of a genuine spontaneous snapshot. One arm should be partially extended naturally, as if the person is holding the phone, without looking deliberately posed. The subject should not make eye contact with the camera and should appear unaware of the exact moment being captured.

Keep the lighting natural and believable, with authentic smartphone exposure and color rendering. Add subtle sensor grain, slight softness, shallow focus, and minor imperfections typical of a real phone photograph.
Avoid studio lighting, beauty retouching, excessive sharpness, artificial skin, or a polished editorial appearance.

The final image should feel raw, candid, spontaneous, and imperfect — like a real accidental photo rather than an intentionally created portrait.

Vertical 4:5 aspect ratio.`
    },
    {
        id: "90s-yamaha-street-style",
        title: "90's Indian Street Style",
        category: "Cinematic",
        image: "images/image-9.webp",
        prompt: `Use the uploaded photo as the primary character reference. Keep the man’s exact facial identity, facial structure, skin tone, hairstyle, body proportions, and recognizable features unchanged. Transform the scene into an authentic 1990s Indian street-style photograph.
The man is sitting casually and confidently on a Yamaha RX-Z motorcycle, with a relaxed, effortlessly cool 90s pose. He is wearing authentic 1990s fashion — oversized vintage shirt with slightly loose-fit jeans, classic leather belt, retro sneakers, and 90s-style dark sunglasses. His clothing should look naturally worn and period-accurate, not modern or futuristic.
The Yamaha RX-Z should have an authentic late-90s appearance, with realistic proportions and period-correct details. The man is posing like a stylish young man from a 1990s Indian movie or vintage magazine photoshoot.
Photography style: authentic 1990s analog film photography, slightly underexposed, warm natural sunlight, harsh directional light, subtle flash feel, deep shadows, muted vintage colors, realistic skin tones, soft highlights, noticeable 35mm film grain, dust, tiny scratches, slight chromatic aberration, halation, mild motion blur, imperfect exposure, low dynamic range and nostalgic film texture.
Make it look like an old low-quality photograph from the 1990s that has been professionally restored/scanned in high resolution — vintage image character but extremely detailed and sharp where appropriate. Avoid the overly clean, glossy, modern AI-generated look.
Composition: cinematic full-body/three-quarter shot, motorcycle clearly visible, slightly low camera angle, confident relaxed expression, natural body posture, authentic Indian 90s street environment, subtle background blur, atmospheric depth.
Overall mood: effortlessly cool, nostalgic, rebellious 90s youth aesthetic, like a rare photograph discovered from a 1990s film magazine.
Important: preserve the original person’s identity exactly. Do not change his face or make him look like a different person. Keep the motorcycle and clothing realistic and period-accurate.`
    },
    {
        id: "munna-bhaiya",
        title: "Munna Bhaiya",
        category: "Cinematic",
        image: "images/image-8.webp",
        prompt: `Photorealistic cinematic 3:4 portrait of the person from my reference image, keeping their face, identity, hairstyle, skin tone, and facial features consistent. Recreate the exact confident pose: standing upright with both hands resting naturally on the hips, shoulders relaxed, looking slightly upward/forward. Dress the person in the same dark brown long-sleeve kurta-style shirt with black inner collar/details. Same accessories: dark sunglasses, multiple black/brown bracelets and bands on the left wrist, and a large silver wristwatch on the right wrist.
In the background, add an old rugged black Mahindra Thar-style off-road SUV with the roof open, chunky wide off-road tires, and distinctive yellow fog lamps, parked naturally behind the person. Keep the vehicle slightly out of focus so the person remains the main subject. Recreate the same outdoor setting with softly blurred people and pale architectural surroundings, shallow depth of field, cinematic natural lighting, muted warm tones, realistic skin texture, subtle film grain, slightly soft dreamy focus.
Frame from head to below the waist with the full body width visible. Both hands, wrists, bracelets, and watch must be completely inside the frame—NO cropped hands or arms. Natural proportions, realistic photography, cinematic composition, high detail, no text, no watermark.`
    },
    {
        id: "moody-outdoor-portrait",
        title: "Moody Graphic Tee Portrait",
        category: "Cinematic",
        image: "images/image-7.webp",
        prompt: `Cinematic, moody outdoor portrait of a stylish young person with naturally curly dark hair, wearing rectangular black sunglasses and a small stud earring, looking slightly to the side rather than at the camera, with a calm, confident expression. They have neatly groomed facial hair or natural soft features, subtle neck tattoos with floral and numeric designs, and are dressed in an oversized, washed-black graphic T-shirt featuring distressed skull and red flame-like elements. The shot is a close-up/medium close-up from the chest up, captured from a slight angle, with the head and shoulders turned subtly to the side. Soft natural lighting with gentle contrast and cinematic`
    },
    {
        id: "triptych-window-silhouette",
        title: "Triptych Window Silhouette",
        category: "Cinematic",
        image: "images/image-6.webp",
        prompt: `Create a photorealistic 3:4 vertical triptych collage featuring the SAME PERSON from the attached reference image, appearing consistently across three equally sized frames stacked vertically. Preserve their recognizable hairstyle, body proportions, overall appearance and natural characteristics from the reference, while keeping the presentation completely gender-neutral.
FRAME 1 — WINDOW LIGHT
Place the person beside a bedroom window, body turned slightly away from the camera. One arm is naturally raised, with the forearm covering the eyes and most of the upper face. Keep the head slightly lowered and the posture relaxed, creating a subtle mysterious mood.
FRAME 2 — BEDROOM POSE
Show the same person sitting casually on the edge of a bed, leaning slightly forward. One hand naturally moves through their hair while the head is lowered, completely hiding the face. Keep the posture relaxed and candid.
FRAME 3 — LOOKING AWAY
Capture the person from a side/rear three-quarter angle while they face toward the window. One hand rests casually behind or over the back of the head. Use the angle and hair to keep the face concealed naturally.`
    },
    {
        id: "midnight-solitude",
        title: "Midnight Solitude",
        category: "Cinematic",
        image: "images/image-5.webp",
        prompt: `Ultra-realistic cinematic nighttime portrait of an adult woman in a dimly lit luxury hotel bedroom, positioned beside a large floor-to-ceiling window overlooking a city at night. She is seated/standing close to the camera with her upper body slightly turned, one shoulder angled toward the camera, head gently tilted to the side, chin slightly raised, eyes softly closed or looking downward, lips slightly parted, with a calm, dreamy, subtly melancholic expression.`
    },
    {
        id: "crimson-studio-editorial",
        title: "Crimson Studio Editorial",
        category: "Fashion Portrait",
        image: "images/image-2.webp",
        prompt: `A cinematic close-up portrait of a stylish young man with medium-length messy wavy black hair, light stubble with a neatly trimmed beard and mustache, wearing slim rectangular black sunglasses and a small silver hoop earring in his left ear. He has a warm confident smile showing white teeth. He is dressed in a black ribbed knit crew-neck sweater. The background is a deep crimson red studio backdrop with a dramatic red rim light illuminating the right side of his hair and shoulder, while soft warm key lighting highlights the front of his face.`
    },
    {
        id: "molten-silver-waves",
        title: "Molten Silver Waves",
        category: "Surreal 3D",
        image: "images/image-3.webp",
        prompt: `Large, flowing liquid chrome/silver metal formations with an ultra-polished mirror finish. The material looks like molten reflective silver, thick and fluid, frozen in dramatic motion. Create smooth, organic tendrils, ribbons, tubes, waves, loops, curls, and elongated streams that twist and bend naturally.`
    },
    {
        id: "rainy-mountain-gwagon",
        title: "Rainy Mountain G-Wagon",
        category: "Automotive",
        image: "images/image-4.webp",
        prompt: `Create a photorealistic vertical 9:16 luxury lifestyle photograph matching the composition and mood of the reference image. A young stylish man is standing beside a black Mercedes-Benz G-Class (G-Wagon) on a wet road during a gloomy, rainy mountain setting.`
    },
    {
        id: "urban-crowd-motion-model",
        title: "Urban Crowd Motion Model",
        category: "Fashion Portrait",
        image: "images/image-1.webp",
        prompt: `Cinematic color portrait of the person from the reference image, whether girl or boy, styled as a professional fashion model with a serious, confident expression and direct front-facing gaze toward the camera.`
    }
];

const gallery = document.getElementById("gallery");
const categoriesContainer = document.getElementById("categories");
const search = document.getElementById("search");
const noResults = document.getElementById("noResults");
const modal = document.getElementById("modal");
const toast = document.getElementById("toast");

// CAROUSEL & PROMPT STATE TRACKING
let currentItem = null;
let currentCarouselImages = [];
let currentPrompts = [];
let currentCarouselIndex = 0;
let activeCategory = "All";

// TOUCH SWIPE TRACKING FOR MOBILE
let touchStartX = 0;
let touchEndX = 0;

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
        const searchPrompt = Array.isArray(item.prompt) ? item.prompt.join(" ") : item.prompt;
        const searchMatch = item.title.toLowerCase().includes(searchText) ||
            item.category.toLowerCase().includes(searchText) ||
            searchPrompt.toLowerCase().includes(searchText);
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
        const cardImage = Array.isArray(item.image) ? item.image[0] : item.image;

        card.innerHTML = `
            <div class="image-container">
                <img src="${cardImage}" alt="${item.title}" loading="lazy" decoding="async">
            </div>
            <div class="card-info">
                <div>
                    <div class="card-category">${item.category}</div>
                    <div class="card-title">${item.title}</div>
                </div>
                <div class="buttons">
                    <button class="btn" onclick="openImage('${item.id}')">View</button>
                    <button class="btn copy-btn" onclick="copyPrompt('${item.id}')">Copy</button>
                </div>
            </div>
        `;
        gallery.appendChild(card);
    });
}

search.addEventListener("input", displayImages);

function copyPrompt(id) {
    const item = images.find(img => img.id === id);
    if (item) {
        const promptToCopy = Array.isArray(item.prompt) 
            ? (modal.classList.contains("show") ? item.prompt[currentCarouselIndex] : item.prompt[0]) 
            : item.prompt;

        navigator.clipboard.writeText(promptToCopy).then(() => {
            showToast();
        });
    }
}

// OPEN MODAL & SETUP CAROUSEL STATE
function openImage(id) {
    currentItem = images.find(img => img.id === id);
    if (currentItem) {
        currentCarouselImages = Array.isArray(currentItem.image) ? currentItem.image : [currentItem.image];
        currentPrompts = Array.isArray(currentItem.prompt) ? currentItem.prompt : [currentItem.prompt];
        currentCarouselIndex = 0;

        document.getElementById("modalTitle").textContent = currentItem.title;
        document.getElementById("modalCategory").textContent = currentItem.category;
        modal.dataset.currentId = id;

        updateCarouselDisplay();
        modal.classList.add("show");
    }
}

// UPDATE IMAGE, DYNAMIC PROMPT, AND BALL DOT INDICATORS
function updateCarouselDisplay() {
    const modalImage = document.getElementById("modalImage");
    const dotsContainer = document.getElementById("dotsContainer");
    const modalPrompt = document.getElementById("modalPrompt");
    const prevBtn = document.querySelector(".prev-btn") || document.getElementById("prevBtn");
    const nextBtn = document.querySelector(".next-btn") || document.getElementById("nextBtn");

    // 1. Update displayed image
    modalImage.src = currentCarouselImages[currentCarouselIndex];

    // 2. Update prompt specifically for the current image index
    if (currentPrompts.length > currentCarouselIndex) {
        modalPrompt.textContent = currentPrompts[currentCarouselIndex];
    } else {
        modalPrompt.textContent = currentPrompts[0];
    }

    // 3. Render Dot Ball Indicators (e.g. 🔵 ⚪ ⚪)
    if (dotsContainer) {
        dotsContainer.innerHTML = "";
        if (currentCarouselImages.length > 1) {
            dotsContainer.style.display = "flex";
            currentCarouselImages.forEach((_, idx) => {
                const dot = document.createElement("span");
                dot.className = "carousel-dot" + (idx === currentCarouselIndex ? " active" : "");
                dot.onclick = (e) => {
                    e.stopPropagation();
                    currentCarouselIndex = idx;
                    updateCarouselDisplay();
                };
                dotsContainer.appendChild(dot);
            });
        } else {
            dotsContainer.style.display = "none";
        }
    }

    // Toggle arrow visibility
    if (prevBtn) prevBtn.style.display = currentCarouselImages.length > 1 ? "flex" : "none";
    if (nextBtn) nextBtn.style.display = currentCarouselImages.length > 1 ? "flex" : "none";
}

function nextSlide() {
    if (currentCarouselImages.length <= 1) return;
    currentCarouselIndex = (currentCarouselIndex + 1) % currentCarouselImages.length;
    updateCarouselDisplay();
}

function prevSlide() {
    if (currentCarouselImages.length <= 1) return;
    currentCarouselIndex = (currentCarouselIndex - 1 + currentCarouselImages.length) % currentCarouselImages.length;
    updateCarouselDisplay();
}

// ATTACH MOUSE AND TOUCH EVENTS
document.addEventListener("DOMContentLoaded", () => {
    bindCarouselEvents();
});

function bindCarouselEvents() {
    const prevBtn = document.querySelector(".prev-btn") || document.getElementById("prevBtn");
    const nextBtn = document.querySelector(".next-btn") || document.getElementById("nextBtn");
    const modalImage = document.getElementById("modalImage");

    if (prevBtn) {
        prevBtn.onclick = (e) => {
            e.stopPropagation();
            prevSlide();
        };
    }

    if (nextBtn) {
        nextBtn.onclick = (e) => {
            e.stopPropagation();
            nextSlide();
        };
    }

    // Mobile Swipe Listeners
    if (modalImage) {
        modalImage.addEventListener("touchstart", e => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        modalImage.addEventListener("touchend", e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }
}

function handleSwipe() {
    const threshold = 40;
    if (touchEndX < touchStartX - threshold) {
        nextSlide();
    }
    if (touchEndX > touchStartX + threshold) {
        prevSlide();
    }
}

bindCarouselEvents();

// KEYBOARD NAVIGATION FOR COMPUTER BROWSERS
document.addEventListener("keydown", e => {
    if (!modal.classList.contains("show")) return;
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "Escape") modal.classList.remove("show");
});

document.getElementById("closeModal").onclick = () => modal.classList.remove("show");
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("show"); });

document.getElementById("modalCopy").onclick = () => {
    if (currentItem) {
        copyPrompt(currentItem.id);
    }
};

function showToast() {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1500);
}

createCategories();
displayImages();
