// Imports
import Layout from '@components/Layout'; // Layout wrapper
import { defaultTomes } from '@utils/constants'; // Bags to render
import styles from '@styles/pages/Home.module.scss'; // Styles

// Types
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  // Quicklinks to render
  const quicklinks: Record<string, string>[] = [
    { name: 'OpenSea', url: 'https://opensea.io/collection/enchantsproject' },
    { name: 'Discord', url: 'https://discord.gg/3v2apT3YWn' },
    {
      name: 'Twitter',
      url: 'https://twitter.com/enchantsproject',
    },
    {
      name: 'Contract',
      url: 'https://etherscan.io/address/0x17a8CBBD824738f2F3e5bc329385A97B7F3BFa1f',
    },
  ];
  // DAWEI: YOU NEED TO CHANGE THE CONTRACT ADDRESS HERE ^ AND FURTHER BELOW  v

  /**
   * Selects 3 random bags from defaultBags
   * @returns {Record<string, string>[]} randomized bags
   */
  const getRandomThreeTomes = () => {
    const shuffled = defaultTomes.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  return (
    <Layout>
      <div>
        <div className={styles.home__cta}>
          {/* CTA title */}
          <h1>Enchants</h1>

          {/* Quicklinks */}
          <ul>
            {quicklinks.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  <a href={url} target='_blank' rel='noopener noreferrer'>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA Description */}
          <p>
            Enchants is a collection of randomized tomes for adventurers
            generated and stored on chain.
            <br /> Stats, images, and other functionality are intentionally
            omitted for others to interpret. <br />
            Part of the Loot Project Metaverse.
          </p>
        </div>

        {/* Rendering sample loot bags */}
        <div className={styles.home__feature}>
          <span>Example Tomes</span>
          {getRandomThreeTomes().map(({ id, attributes }, i) => (
            // For each loot bag, render item and link to OpenSea
            // DAWEI: CHANGE THIS CONTRACT ADDRESS LINK
            <a
              href={`https://opensea.io/assets/0x17a8CBBD824738f2F3e5bc329385A97B7F3BFa1f/${id}`}
              target='_blank'
              rel='noopener noreferrer'
              key={i}
              className={styles.home__bag}
            >
              <div className={styles.home__bag_attributes}>
                <span>#{id}</span>
                <ul>
                  {attributes.map((attribute, i) => (
                    <li key={i}>
                      <span>{attribute}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
