import React from 'react'
import { lightenDarkenColor } from './lightenDarkenColor'

interface Props {
    hairColor: string
    eyesColor: string
    jacketColor: string
}


export const GrandmaSVG3: React.FC<Props> = ({ hairColor, eyesColor, jacketColor }) => {
    const lightenHairColor = lightenDarkenColor(hairColor, 50)
    const lightenJacketColor = lightenDarkenColor(jacketColor, 30)

    return (
        <svg id="Capa_1" enableBackground="new 0 0 502 502" viewBox="0 0 502 502"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <linearGradient id="lg1">
                <stop offset="0" stopColor="#f2ae6f" />
                <stop offset="1" stopColor="#f2d1a5" />
            </linearGradient>
            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="74.211" x2="25.159" xlinkHref="#lg1" y1="219.249" y2="219.249"/>
            <linearGradient id="lg2">
                <stop offset="0" stopColor="#f9edaf" />
                <stop offset="1" stopColor="#fffcdd" />
            </linearGradient>
            <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="60.619" x2="60.619" xlinkHref="#lg2" y1="287.498" y2="229.182"/>
            <linearGradient id="SVGID_3_" gradientTransform="matrix(-1 0 0 1 502 0)" gradientUnits="userSpaceOnUse" x1="74.211" x2="25.159" xlinkHref="#lg1" y1="219.249" y2="219.249"/>
            <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="441.381" x2="441.381" xlinkHref="#lg2" y1="287.498" y2="229.182"/>
            <linearGradient id="lg3">
                <stop offset="0" stopColor={jacketColor} />
                <stop offset="1" stopColor={lightenJacketColor} />
            </linearGradient>
            <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="155.819" x2="68.776" xlinkHref="#lg3" y1="423.223" y2="423.223"/>
            <linearGradient id="SVGID_6_" gradientTransform="matrix(-1 0 0 1 -2690 0)" gradientUnits="userSpaceOnUse" x1="-3036.181" x2="-3123.224" xlinkHref="#lg3" y1="423.223" y2="423.223"/>
            <linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="251" x2="251" xlinkHref="#lg3" y1="292.513" y2="473.43"/>
            <linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="208.485" x2="208.485" xlinkHref="#lg2" y1="390.136" y2="417.826"/>
            <linearGradient id="SVGID_9_" gradientTransform="matrix(-1 0 0 1 474.397 0)" gradientUnits="userSpaceOnUse" x1="180.881" x2="180.881" xlinkHref="#lg2" y1="390.136" y2="417.826"/>
            <linearGradient id="SVGID_10_" gradientUnits="userSpaceOnUse" x1="251" x2="251" xlinkHref="#lg1" y1="520.523" y2="193.64"/>
            <linearGradient id="SVGID_11_" gradientUnits="userSpaceOnUse" x1="251" x2="251" y1="255.005" y2="46.762">
                <stop offset="0" stopColor={hairColor} />
                <stop offset="1" stopColor={lightenHairColor} />
            </linearGradient>
            <linearGradient id="SVGID_12_" gradientUnits="userSpaceOnUse" x1="251" x2="251" xlinkHref="#lg2" y1="484.492" y2="452.963"/>
            <g>
                <path d="m115.887 213.71c0-27.8-22.536-50.336-50.336-50.336s-50.335 22.536-50.335 50.336c0 38.048 31.614 61.413 59.414 61.413s41.257-33.614 41.257-61.413z" fill="url(#SVGID_1_)" />
                <circle cx="60.619" cy="266.014" fill="url(#SVGID_2_)" r="30.624" />
                <path d="m386.113 213.71c0-27.8 22.536-50.336 50.336-50.336s50.336 22.536 50.336 50.336c0 38.048-31.614 61.413-59.414 61.413s-41.258-33.614-41.258-61.413z" fill="url(#SVGID_3_)" />
                <circle cx="441.381" cy="266.014" fill="url(#SVGID_4_)" r="30.624" />
                <path d="m158.496 344.447c-62.263 10.48-101.597 69.486-111.081 129.542-2.323 14.706 9.047 28.011 23.935 28.011h31.561l101.909-157.553z" fill="url(#SVGID_5_)" />
                <path d="m343.504 344.447c62.263 10.48 101.597 69.486 111.081 129.542 2.323 14.706-9.047 28.011-23.935 28.011h-31.561l-101.908-157.553z" fill="url(#SVGID_6_)" />
                <path d="m399.089 502c0-100.359-66.302-181.716-148.089-181.716s-148.089 81.357-148.089 181.716z" fill="url(#SVGID_7_)" />
                <path d="m131.866 394.059c34.989 21.687 76.125 33.35 119.134 33.35 18.997 0 37.627-2.28 55.525-6.69 9.527-2.348 14.917-12.442 11.576-21.668-2.872-7.929-11.259-12.438-19.445-10.411-15.188 3.761-31.165 5.77-47.656 5.77-36.715 0-70.88-9.95-99.454-27.047-7.253 8.071-13.847 17.017-19.68 26.696z" fill="#e05d6f" />
                <path d="m251 394.408c-3.536 9.396-21.333 28.633-32.978 39.697-5.239 4.978-13.311 5.565-19.155 1.315-25.344-18.43-46.981-58.098-21.458-91.144z" fill="url(#SVGID_8_)" />
                <path d="m179.929 416.286c14.861 4.815 30.33 8.111 46.186 9.798 10.495-10.802 22.103-24.283 24.885-31.676-30.711 0-59.638-6.96-85.001-19.241-.454 14.756 5.32 29.187 13.93 41.119z" fill="#f2e07e" />
                <path d="m251 394.408c3.536 9.396 21.333 28.633 32.978 39.697 5.239 4.978 13.311 5.565 19.155 1.315 25.344-18.43 46.981-58.098 21.457-91.144z" fill="url(#SVGID_9_)" />
                <path d="m306.525 420.718c9.527-2.348 14.917-12.442 11.576-21.668-2.872-7.929-11.259-12.438-19.445-10.411-15.188 3.761-31.165 5.77-47.656 5.77 2.78 7.388 14.377 20.859 24.868 31.658 10.404-1.108 20.648-2.883 30.657-5.349z" fill="#f2e07e" />
                <ellipse cx="251" cy="228.502" fill="url(#SVGID_10_)" rx="181.716" ry="165.906" />
                <path d="m423.64 75.621c-3.202-1.236-5.473-4.074-6.004-7.464-3.975-25.334-25.896-44.713-52.346-44.713-9.961 0-19.27 2.759-27.225 7.545-3.899 2.346-8.876 1.395-11.902-2.005-15.466-17.38-43.333-28.984-75.163-28.984s-59.697 11.604-75.163 28.984c-3.025 3.399-8.003 4.351-11.902 2.005-7.955-4.786-17.263-7.545-27.224-7.545-26.45 0-48.372 19.379-52.346 44.713-.532 3.39-2.803 6.228-6.005 7.464-22.162 8.555-37.966 30.839-37.966 56.986 0 33.54 26.002 60.73 58.078 60.73 30.746 0 54.922-17.581 63.217-41.906 1.604-4.702 6.613-7.289 11.411-5.999 24.968 6.716 53.076 1.566 71.834-13.902 3.536-2.915 8.598-2.915 12.134 0 18.749 15.459 46.854 20.622 71.834 13.902 4.798-1.291 9.807 1.297 11.41 5.999 8.296 24.325 32.471 41.906 63.217 41.906 32.076 0 58.078-27.19 58.078-60.73-.001-26.147-15.804-48.431-37.967-56.986z" fill="url(#SVGID_11_)" />
                <path d="m138.181 235.66c-.524 0-1.056-.041-1.59-.126-11.23-1.794-20.721-4.646-29.015-8.721-4.956-2.435-7-8.428-4.566-13.385 2.436-4.956 8.427-7.003 13.386-4.565 6.478 3.183 14.115 5.447 23.349 6.921 5.453.871 9.169 5.998 8.298 11.452-.785 4.919-5.035 8.424-9.862 8.424z" fill="#e8aa70" />
                <path d="m363.819 235.66c-4.828 0-9.076-3.505-9.862-8.425-.871-5.454 2.845-10.581 8.298-11.452 9.233-1.474 16.871-3.738 23.349-6.921 4.958-2.437 10.949-.392 13.386 4.565 2.435 4.957.391 10.95-4.565 13.385-8.294 4.075-17.785 6.927-29.015 8.721-.535.086-1.066.127-1.591.127z" fill="#e8aa70" />
                <circle cx="251" cy="467.82" fill="url(#SVGID_12_)" r="16.309" />
                <g>
                    <ellipse cx="163.115" cy="259.006" fill="#eaadcd" rx="14.936" ry="12.003" />
                    <ellipse cx="338.886" cy="259.006" fill="#eaadcd" rx="14.936" ry="12.003" />
                    <circle cx="188.721" cy="229.388" fill="#fff" r="29.618" />
                    <circle cx="313.279" cy="229.388" fill="#fff" r="29.618" />
                    <g fill={eyesColor}>
                        <g>
                            <circle cx="188.721" cy="229.388" r="17.652" />
                            <circle cx="313.279" cy="229.388" r="17.652" />
                        </g>
                        <path d="m251 259.948c-5.247 0-10.495-1.984-14.775-5.954-2.025-1.877-2.145-5.041-.267-7.066 1.877-2.025 5.042-2.144 7.065-.267 4.697 4.355 11.256 4.355 15.953 0 2.023-1.876 5.188-1.759 7.065.267 1.878 2.025 1.759 5.188-.267 7.066-4.279 3.969-9.527 5.954-14.774 5.954z" />
                    </g>
                </g>
            </g>
        </svg>
    )
}