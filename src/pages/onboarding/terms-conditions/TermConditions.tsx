import React from "react";
import s from "./TermConditions.module.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function TermConditions() {
    return (
        <div className={s.TermConditions}>
            <div className={s.TermConditionsWrapper}>
                <div className={s.TermConditionsTopTitle}>
                    <h2>Terms and Condition</h2>
                    <p className="">
                        Lorem ipsum dolor sit amet consectetur. Nibh vitae
                        aliquet nuncmauris. Quam suspendisse lacus at eget.{" "}
                    </p>
                </div>

                <div className="">
                    <article>
                        <br />
                        <h4>Accepting the terms</h4>
                        <br />
                        Lorem ipsum dolor sit amet consectetur. Sit elit elit
                        massa condimentum et. Ac amet fermentum a convallis
                        dignissim tortor molestie quam. Feugiat amet elit in
                        turpis enim enim pharetra suspendisse gravida. Magna
                        commodo vivamus malesuada eget risus in orci blandit
                        nec.
                        <br />
                        <br />
                        Faucibus accumsan sit neque congue nulla lacus eget
                        adipiscing justo. In quis nisl sem orci. At leo
                        elementum laoreet volutpat lacus tincidunt lectus
                        platea. Sem rutrum turpis ut mauris. Adipiscing leo
                        turpis maecenas consectetur et suspendisse. Scelerisque
                        suspendisse rhoncus ornare est ligula consequat enim
                        amet. Duis urna ac ultricies elementum amet elementum
                        sit sed in. Ultrices elementum curabitur quam vitae
                        aliquet congue at massa in. Pharetra dolor lectus elit
                        commodo consequat cras amet orci vulputate. Vestibulum
                        lacus faucibus eros id. Et sem viverra sapien tellus
                        ultrices rhoncus sit non sit. Tellus quam id odio dolor
                        in.
                        <br />
                        <br />
                        <h4>Using our product</h4>
                        <br />
                        Nulla amet auctor metus nisl accumsan velit id. Urna
                        nisl maecenas consectetur quisque quis lorem donec.
                        Blandit fringilla tempor nulla ornare amet ut ac
                        facilisi in. Consectetur ac orci at adipiscing. Nulla
                        quam adipiscing odio tempor morbi nulla risus. Integer
                        aliquam tincidunt molestie imperdiet metus neque commodo
                        aliquam feugiat. Suspendisse volutpat sem ullamcorper
                        consequat cursus. Pretium mi neque vel placerat. Ut
                        fringilla ultrices nulla justo tristique erat nisl
                        pulvinar. Purus amet sagittis ac amet. Semper vulputate
                        ipsum vel proin quisque nunc interdum amet. Proin vitae
                        egestas consectetur nunc netus viverra congue ut nam.
                        Viverra elit in dignissim dignissim ac consequat cras.
                        <br />
                        Interdum mi in dignissim non urna orci dictum. Vulputate
                        euismod pellentesque ornare tincidunt lectus morbi id
                        pharetra. Facilisis sapien adipiscing amet ut convallis
                        rhoncus erat auctor nullam. Id mattis sit volutpat
                        semper lectus. Ultrices dui imperdiet a a. Ac tortor
                        quam placerat sapien tristique porta scelerisque. Est
                        leo lorem quis gravida consequat. Hendrerit eu et dictum
                        sem sed arcu habitasse pellentesque feugiat. Quam congue
                        ac purus elit ac cras nunc. Ut quis odio odio ornare
                        ipsum diam nunc in. Sagittis purus ut et nisi molestie.
                        Egestas tincidunt a magna mauris.
                        <br />
                        <br />
                        <h4>Privacy Policy Semper</h4>
                        <br />
                        enim odio ut pharetra tincidunt ornare pulvinar
                        porttitor convallis. Massa mattis volutpat cursus ante
                        amet tempus turpis enim. Amet lacus at at eget. Nunc
                        consectetur pellentesque ultrices quisque dignissim at
                        euismod. Eu sed felis urna nulla. Accumsan netus nisi
                        ultrices ultrices a amet. Congue mi mollis euismod
                        mauris viverra. Pharetra neque amet nec ornare ipsum
                        euismod in nibh. Bibendum augue nec quis a. Sed
                        sollicitudin consectetur vel mi et enim. Ac odio enim
                        scelerisque erat eros cursus neque. Quam et adipiscing
                        blandit est lacus turpis ipsum. Quis placerat at blandit
                        consectetur. Rhoncus arcu sem molestie nisl nisl sit ut
                        magna netus. Sed rhoncus sit orci non.
                    </article>
                    <br />
                    <Link
                        to="/dashboard/home"
                        onClick={() => toast.success("Welcome to Emis!")}
                        className="primary-btn"
                    >
                        I Agree
                    </Link>
                </div>
            </div>
        </div>
    );
}
