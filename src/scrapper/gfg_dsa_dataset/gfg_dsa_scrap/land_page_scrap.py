from gfg_dsa_scrap.common_utils import GfgDsaScrap, time, const, By, WebDriverWait, NoSuchElementException, os

class DsaLandPageScraper(GfgDsaScrap):
    def land_gfg_dsa_land_page(self):
        self.get(const.gfg_dsa_first_page_url)

        WebDriverWait(self, 20).until(
            lambda driver: self.find_element(By.CSS_SELECTOR, ".entry-content").is_displayed()
        )
        content_element = self.find_element(By.CSS_SELECTOR, ".entry-content")
        content = content_element.text
    
        with open("gfg_dsa/gfg_dsa_first_page.txt", "w") as f:
            f.write(content)
        f.close()
        link_elements = self.find_elements(By.CSS_SELECTOR, ".entry-content a")
        links = [link.get_attribute("href") for link in link_elements]
        os.mkdir("gfg_dsa/land_page")
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

                with open(f"gfg_dsa/land_page/gfg_dsa_first_page_{title}.txt", "w") as f:
                    f.write(data_to_scrape)

                f.close()
                time.sleep(2)
                self.back()

            except Exception as e:
                print(f"Error processing {link}: {str(e)}")
                
        self.quit()


    