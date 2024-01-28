import React from "react";
import Button from "../../components/buttons/Button";
import useDashboardLayoutController from "../layouts/Index.controller";

export default function Test() {
    const {
        mobileAsideBool,
        isMobileAsideOpen,
        toggleMobileAside,
        desktopAsideBool,
        isDesktopAsideOpen,
        toggleDesktopAside,
    } = useDashboardLayoutController();

    return (
        <div>
            <header>
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque tenetur dolor totam, id adipisci minima nostrum
                    dolore mollitia nulla soluta commodi accusamus veritatis
                    vitae beatae, autem at. Nemo, atque soluta.
                </h1>
                <br />
                <Button onClick={(e) => toggleMobileAside(e, true)}>
                    PLEASE WORK
                </Button>
                <button>TRY CLICK</button>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi est alias dolores saepe odio omnis ea sint voluptatem
                    tempora, quaerat laboriosam necessitatibus sequi rerum
                    officiis molestiae hic. Molestiae voluptates assumenda
                    maxime eveniet obcaecati modi? Nulla laborum, ab nesciunt id
                    veritatis enim perspiciatis illum qui numquam recusandae
                    maiores, blanditiis soluta sed dolores necessitatibus
                    quisquam vel. Perferendis, vero rem, possimus amet
                    distinctio labore dolor iusto delectus obcaecati harum
                    impedit, qui explicabo tempore quam id consequatur. Placeat
                    earum nulla maxime alias facilis, quis architecto esse qui
                    consectetur nihil explicabo, adipisci modi in voluptatibus
                    illum rerum voluptatum minus, dignissimos at quidem!
                    Reiciendis nulla esse odio saepe optio vitae corrupti
                    aliquid ex a. Sint quia quam alias eos et nihil tempora eius
                    dicta pariatur sequi facere hic id, dolor dolorem aliquid,
                    ab amet? Repudiandae fuga officiis iste reprehenderit, iusto
                    ipsa voluptates officia iure, quam natus aut nisi ea. A aut
                    aliquid ut alias deleniti cumque error nisi corrupti
                    pariatur iste? Quia dolor voluptatum rerum assumenda,
                    consectetur aspernatur maxime odit ipsa fugiat quos iusto
                    voluptas, deserunt excepturi veniam id dicta, laboriosam
                    alias sed eaque? Natus tempore laboriosam earum pariatur
                    porro eaque obcaecati fuga, in dolor dolorum assumenda alias
                    dignissimos quos nam autem molestiae sed! Qui, corrupti.
                </p>
            </header>
        </div>
    );
}
