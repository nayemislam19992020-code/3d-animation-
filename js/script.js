console.log("TOONHUB 3D Cartoon Connected!");


// ======================================================
// SCENE
// ======================================================

const scene = new THREE.Scene();

scene.background = new THREE.Color(0xdce9ff);


// ======================================================
// CAMERA
// ======================================================

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.set(
    0,
    1.5,
    9
);


// ======================================================
// RENDERER
// ======================================================

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false
});

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.outputEncoding = THREE.sRGBEncoding;

renderer.shadowMap.enabled = true;

renderer.shadowMap.type =
    THREE.PCFSoftShadowMap;


document
    .getElementById("scene")
    .appendChild(renderer.domElement);


// ======================================================
// LIGHTS
// ======================================================

const ambientLight =
    new THREE.AmbientLight(
        0xffffff,
        1.5
    );

scene.add(ambientLight);


const mainLight =
    new THREE.DirectionalLight(
        0xffffff,
        2
    );

mainLight.position.set(
    5,
    8,
    6
);

mainLight.castShadow = true;

scene.add(mainLight);


const fillLight =
    new THREE.DirectionalLight(
        0x9ecbff,
        0.8
    );

fillLight.position.set(
    -5,
    4,
    3
);

scene.add(fillLight);


// ======================================================
// MATERIAL
// ======================================================

function createMaterial(color) {

    return new THREE.MeshStandardMaterial({

        color: color,

        roughness: 0.45,

        metalness: 0.05
    });
}


// ======================================================
// CREATE CARTOON
// ======================================================

function createCharacter(shirtColor) {

    const character =
        new THREE.Group();


    // ==================================================
    // MATERIALS
    // ==================================================

    const skin =
        createMaterial(0xffc58a);

    const hair =
        createMaterial(0x24140f);

    const shirt =
        createMaterial(shirtColor);

    const pants =
        createMaterial(0x263b6e);

    const shoes =
        createMaterial(0x171717);

    const white =
        createMaterial(0xffffff);

    const black =
        createMaterial(0x111111);

    const red =
        createMaterial(0xff4b5c);


    // ==================================================
    // HEAD
    // ==================================================

    const head =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                1.05,
                32,
                32
            ),

            skin

        );

    head.position.set(
        0,
        3.15,
        0
    );

    head.scale.set(
        1,
        1.08,
        0.9
    );

    head.castShadow = true;

    character.add(head);


    // ==================================================
    // HAIR
    // ==================================================

    const hairTop =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                1.08,
                32,
                32
            ),

            hair

        );

    hairTop.position.set(
        0,
        3.68,
        -0.05
    );

    hairTop.scale.set(
        1,
        0.55,
        0.9
    );

    hairTop.castShadow = true;

    character.add(hairTop);


    // ==================================================
    // HAIR FRONT
    // ==================================================

    for (
        let i = -1;
        i <= 1;
        i++
    ) {

        const hairBall =
            new THREE.Mesh(

                new THREE.SphereGeometry(
                    0.3,
                    20,
                    20
                ),

                hair

            );

        hairBall.position.set(
            i * 0.35,
            3.88,
            0.72
        );

        character.add(
            hairBall
        );
    }


    // ==================================================
    // EYES
    // ==================================================

    const leftEye =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.27,
                24,
                24
            ),

            white

        );

    leftEye.position.set(
        -0.38,
        3.25,
        0.87
    );

    character.add(leftEye);


    const rightEye =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.27,
                24,
                24
            ),

            white

        );

    rightEye.position.set(
        0.38,
        3.25,
        0.87
    );

    character.add(rightEye);


    // ==================================================
    // PUPILS
    // ==================================================

    const leftPupil =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.12,
                16,
                16
            ),

            black

        );

    leftPupil.position.set(
        -0.38,
        3.25,
        1.10
    );

    character.add(leftPupil);


    const rightPupil =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.12,
                16,
                16
            ),

            black

        );

    rightPupil.position.set(
        0.38,
        3.25,
        1.10
    );

    character.add(rightPupil);


    // ==================================================
    // NOSE
    // ==================================================

    const nose =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.14,
                20,
                20
            ),

            skin

        );

    nose.position.set(
        0,
        2.92,
        1.02
    );

    character.add(nose);


    // ==================================================
    // MOUTH
    // ==================================================

    const mouth =
        new THREE.Mesh(

            new THREE.TorusGeometry(
                0.17,
                0.045,
                12,
                24,
                Math.PI
            ),

            black

        );

    mouth.position.set(
        0,
        2.67,
        1.01
    );

    mouth.rotation.x =
        Math.PI;

    character.add(mouth);


    // ==================================================
    // CHEEKS
    // ==================================================

    const leftCheek =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.12,
                16,
                16
            ),

            red

        );

    leftCheek.position.set(
        -0.67,
        2.90,
        0.83
    );

    leftCheek.scale.set(
        1.3,
        0.7,
        0.3
    );

    character.add(leftCheek);


    const rightCheek =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.12,
                16,
                16
            ),

            red

        );

    rightCheek.position.set(
        0.67,
        2.90,
        0.83
    );

    rightCheek.scale.set(
        1.3,
        0.7,
        0.3
    );

    character.add(rightCheek);


    // ==================================================
    // EARS
    // ==================================================

    const leftEar =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.28,
                20,
                20
            ),

            skin

        );

    leftEar.position.set(
        -1.02,
        3.15,
        0
    );

    character.add(leftEar);


    const rightEar =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.28,
                20,
                20
            ),

            skin

        );

    rightEar.position.set(
        1.02,
        3.15,
        0
    );

    character.add(rightEar);


    // ==================================================
    // BODY
    // ==================================================

    const body =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.95,
                32,
                24
            ),

            shirt

        );

    body.position.set(
        0,
        1.75,
        0
    );

    body.scale.set(
        0.82,
        1.15,
        0.65
    );

    body.castShadow = true;

    character.add(body);


    // ==================================================
    // LEFT ARM
    // ==================================================

    const leftArm =
        new THREE.Mesh(

            new THREE.CylinderGeometry(
                0.18,
                0.22,
                1.15,
                20
            ),

            skin

        );

    leftArm.position.set(
        -0.95,
        1.75,
        0
    );

    leftArm.rotation.z =
        -0.35;

    leftArm.castShadow = true;

    character.add(leftArm);


    // ==================================================
    // RIGHT ARM
    // ==================================================

    const rightArm =
        new THREE.Mesh(

            new THREE.CylinderGeometry(
                0.18,
                0.22,
                1.15,
                20
            ),

            skin

        );

    rightArm.position.set(
        0.95,
        1.75,
        0
    );

    rightArm.rotation.z =
        0.35;

    rightArm.castShadow = true;

    character.add(rightArm);


    // ==================================================
    // HANDS
    // ==================================================

    const leftHand =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.25,
                20,
                20
            ),

            skin

        );

    leftHand.position.set(
        -1.12,
        1.15,
        0
    );

    character.add(leftHand);


    const rightHand =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.25,
                20,
                20
            ),

            skin

        );

    rightHand.position.set(
        1.12,
        1.15,
        0
    );

    character.add(rightHand);


    // ==================================================
    // LEGS
    // ==================================================

    const leftLeg =
        new THREE.Mesh(

            new THREE.CylinderGeometry(
                0.25,
                0.30,
                1.15,
                20
            ),

            pants

        );

    leftLeg.position.set(
        -0.38,
        0.55,
        0
    );

    leftLeg.castShadow = true;

    character.add(leftLeg);


    const rightLeg =
        new THREE.Mesh(

            new THREE.CylinderGeometry(
                0.25,
                0.30,
                1.15,
                20
            ),

            pants

        );

    rightLeg.position.set(
        0.38,
        0.55,
        0
    );

    rightLeg.castShadow = true;

    character.add(rightLeg);


    // ==================================================
    // SHOES
    // ==================================================

    const leftShoe =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.38,
                24,
                24
            ),

            shoes

        );

    leftShoe.position.set(
        -0.4,
        -0.05,
        0.22
    );

    leftShoe.scale.set(
        1.15,
        0.65,
        1.45
    );

    character.add(leftShoe);


    const rightShoe =
        new THREE.Mesh(

            new THREE.SphereGeometry(
                0.38,
                24,
                24
            ),

            shoes

        );

    rightShoe.position.set(
        0.4,
        -0.05,
        0.22
    );

    rightShoe.scale.set(
        1.15,
        0.65,
        1.45
    );

    character.add(rightShoe);


    // ==================================================
    // STORE ANIMATION PARTS
    // ==================================================

    character.userData.leftArm =
        leftArm;

    character.userData.rightArm =
        rightArm;

    character.userData.leftLeg =
        leftLeg;

    character.userData.rightLeg =
        rightLeg;


    return character;
}


// ======================================================
// THREE CARTOONS
// ======================================================

const characters = [

    createCharacter(
        0xff4f5e
    ),

    createCharacter(
        0x4b83f5
    ),

    createCharacter(
        0x35b96f
    )

];


// ======================================================
// ACTIVE CHARACTER
// ======================================================

let current = 0;

let active =
    characters[current];

active.position.x =
    1.1;

scene.add(active);


// ======================================================
// PLATFORM
// ======================================================

const platform =
    new THREE.Mesh(

        new THREE.CylinderGeometry(
            1.75,
            1.9,
            0.3,
            64
        ),

        new THREE.MeshStandardMaterial({

            color: 0xffffff,

            roughness: 0.35,

            metalness: 0.05

        })

    );

platform.position.set(
    1.1,
    -1.05,
    0
);

platform.receiveShadow = true;

scene.add(platform);


// ======================================================
// ROTATION VARIABLES
// ======================================================

let targetRotation = 0;

let targetTilt = 0;

let dragging = false;

let previousX = 0;

let previousY = 0;


// ======================================================
// CHANGE CARTOON
// ======================================================

function changeFigurine(direction) {

    scene.remove(active);


    current =
        (
            current +
            direction +
            characters.length
        ) %
        characters.length;


    active =
        characters[current];


    active.position.set(
        window.innerWidth < 768
            ? 0
            : 1.1,
        -0.1,
        0
    );


    active.rotation.set(
        0,
        0,
        0
    );


    targetRotation = 0;

    targetTilt = 0;


    scene.add(active);


    document
        .getElementById("counter")
        .textContent =

        String(current + 1)
            .padStart(2, "0")

        + " / " +

        String(
            characters.length
        )
        .padStart(2, "0");
}


// ======================================================
// NEXT
// ======================================================

document
    .getElementById("btn-next")
    .addEventListener(
        "click",
        function () {

            changeFigurine(1);

        }
    );


// ======================================================
// PREVIOUS
// ======================================================

document
    .getElementById("btn-prev")
    .addEventListener(
        "click",
        function () {

            changeFigurine(-1);

        }
    );


// ======================================================
// MOUSE / TOUCH DRAG
// ======================================================

renderer.domElement.addEventListener(
    "pointerdown",
    function (event) {

        dragging = true;

        previousX =
            event.clientX;

        previousY =
            event.clientY;

        renderer.domElement
            .setPointerCapture(
                event.pointerId
            );
    }
);


renderer.domElement.addEventListener(
    "pointermove",
    function (event) {

        if (!dragging) {
            return;
        }


        const deltaX =
            event.clientX -
            previousX;


        const deltaY =
            event.clientY -
            previousY;


        targetRotation +=
            deltaX * 0.006;


        targetTilt +=
            deltaY * 0.003;


        targetRotation =
            THREE.MathUtils.clamp(
                targetRotation,
                -1.3,
                1.3
            );


        targetTilt =
            THREE.MathUtils.clamp(
                targetTilt,
                -0.35,
                0.35
            );


        previousX =
            event.clientX;

        previousY =
            event.clientY;
    }
);


function stopDragging() {

    dragging = false;
}


renderer.domElement.addEventListener(
    "pointerup",
    stopDragging
);

renderer.domElement.addEventListener(
    "pointercancel",
    stopDragging
);


// ======================================================
// ANIMATION
// ======================================================

const clock =
    new THREE.Clock();


function animate() {

    requestAnimationFrame(
        animate
    );


    const time =
        clock.getElapsedTime();


    // -----------------------------------------------
    // FLOATING
    // -----------------------------------------------

    active.position.y =
        -0.1 +
        Math.sin(
            time * 2
        ) * 0.10;


    // -----------------------------------------------
    // AUTOMATIC ROTATION
    // -----------------------------------------------

    if (!dragging) {

        targetRotation =
            Math.sin(
                time * 0.8
            ) * 0.45;

        targetTilt =
            Math.sin(
                time * 0.7
            ) * 0.06;
    }


    // -----------------------------------------------
    // SMOOTH ROTATION
    // -----------------------------------------------

    active.rotation.y +=
        (
            targetRotation -
            active.rotation.y
        ) * 0.06;


    active.rotation.x +=
        (
            targetTilt -
            active.rotation.x
        ) * 0.06;


    // -----------------------------------------------
    // ARM ANIMATION
    // -----------------------------------------------

    const leftArm =
        active.userData.leftArm;

    const rightArm =
        active.userData.rightArm;


    leftArm.rotation.z =
        -0.35 +
        Math.sin(
            time * 3
        ) * 0.10;


    rightArm.rotation.z =
        0.35 +
        Math.sin(
            time * 3
        ) * 0.10;


    // -----------------------------------------------
    // LEG ANIMATION
    // -----------------------------------------------

    const leftLeg =
        active.userData.leftLeg;

    const rightLeg =
        active.userData.rightLeg;


    leftLeg.rotation.z =
        Math.sin(
            time * 3
        ) * 0.04;


    rightLeg.rotation.z =
        -Math.sin(
            time * 3
        ) * 0.04;


    // -----------------------------------------------
    // PLATFORM
    // -----------------------------------------------

    platform.rotation.y +=
        0.003;


    // -----------------------------------------------
    // RENDER
    // -----------------------------------------------

    renderer.render(
        scene,
        camera
    );
}


animate();


// ======================================================
// RESPONSIVE
// ======================================================

function resizeScene() {

    const width =
        window.innerWidth;

    const height =
        window.innerHeight;


    camera.aspect =
        width / height;

    camera.updateProjectionMatrix();


    if (width < 768) {

        camera.position.set(
            0,
            1.3,
            10
        );

        active.position.x =
            0;

        platform.position.x =
            0;

    } else {

        camera.position.set(
            0,
            1.5,
            9
        );

        active.position.x =
            1.1;

        platform.position.x =
            1.1;
    }


    renderer.setSize(
        width,
        height
    );
}


window.addEventListener(
    "resize",
    resizeScene
);


resizeScene();