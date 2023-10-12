from gfg_dsa_scrap.common_utils import GfgDsaScrap, time, const, By, WebDriverWait, NoSuchElementException, os

class DsaAdvScraper(GfgDsaScrap):
    def land_gfg_dsa_adv_page(self):
        self.get(const.gfg_dsa_advanced_page_url)
        link_elements = self.find_elements(By.CSS_SELECTOR, ".entry-content a")
        links = [link.get_attribute("href") for link in link_elements]
        os.mkdir("gfg_dsa/advanced")
        for link in links:
            if link in ("javascript:void(0)", "None", None):
                continue
            try:
                self.get(link)
                try:
                    data_element = self.find_element(By.CSS_SELECTOR, ".content")
                    title_element = self.find_element(By.CSS_SELECTOR, "h1")
                except NoSuchElementException:
                    continue
                data_to_scrape = data_element.text
                title = title_element.text
                with open(f"gfg_dsa/advanced/gfg_dsa_advanced_{title}.txt", "w") as f:
                    f.write(data_to_scrape)
                f.close()
                time.sleep(2)
                self.back()
            except Exception as e:
                print(f"Error processing {link}: {str(e)}")
        self.quit()