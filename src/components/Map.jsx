import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import 'mapbox-gl/dist/mapbox-gl.css';
import geoJson from "./locations.json";
import mapboxgl from '!mapbox-gl';

const apiKey = process.env.REACT_APP_TOKEN;
mapboxgl.accessToken = apiKey;

export default function Map({ }) {

  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [35.500044, 32.498626],
      zoom: 12,
    });

    map.on("load", function () {
      // Add an image to use as a custom marker
      map.loadImage(
        "https://i.ibb.co/HDwLKxt/image-32x40.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          // Add a GeoJSON source with multiple points
          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: geoJson.features,
            },
          });
          // Add a symbol layer
          map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              // get the title name from the source's "title" property
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);



  return (

    <motion.section
      id="map"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, stiffness: 500 }}
    >
      <div ref={mapContainerRef} className="map-container" />
    </motion.section>

  );
}

