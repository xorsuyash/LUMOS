import time
import selenium
import gfg_dsa_scrap.constants as const
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import NoSuchElementException

class GfgDsaScrap(webdriver.Chrome):
    def __init__(self):
        super(GfgDsaScrap, self).__init__()
        self.maximize_window()
