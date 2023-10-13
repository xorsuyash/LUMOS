import argparse

from gfg_dsa_scrap.graph_scrap import DsaGraphScraper
from gfg_dsa_scrap.adv_scrap import DsaAdvScraper
from gfg_dsa_scrap.array_scrap import DsaArrayScraper
from gfg_dsa_scrap.bst_scrap import DsaBstScraper
from gfg_dsa_scrap.binary_tree_scrap import DsaBinaryTreeScraper
from gfg_dsa_scrap.hashing_scrap import DsaHashingScraper
from gfg_dsa_scrap.heap_scrap import DsaHeapScraper
from gfg_dsa_scrap.land_page_scrap import DsaLandPageScraper
from gfg_dsa_scrap.lk_scrap import DsaLkScraper
from gfg_dsa_scrap.matrix_scrap import DsaMatrixScraper
from gfg_dsa_scrap.misc_scrap import DsaMiscScraper
from gfg_dsa_scrap.queue_scrap import DsaQueueScraper
from gfg_dsa_scrap.stack_scrap import DsaStackScraper



def graph():
    inst_graph = DsaGraphScraper()
    inst_graph.land_gfg_dsa_graph_page()

def adv():
    inst_adv = DsaAdvScraper()
    inst_adv.land_gfg_dsa_adv_page()

def array():
    inst_array = DsaArrayScraper()
    inst_array.land_gfg_dsa_array_page()

def bst():
    inst_bst = DsaBstScraper()
    inst_bst.land_gfg_dsa_bst_page()

def binarytree():
    inst_binary_tree = DsaBinaryTreeScraper()
    inst_binary_tree.land_gfg_dsa_binary_tree_page()

def hashing():
    inst_hashing = DsaHashingScraper()
    inst_hashing.land_gfg_dsa_hashing_page()

def heap():
    inst_heap = DsaHeapScraper()
    inst_heap.land_gfg_dsa_heap_page()

def landpage():
    inst_land_page = DsaLandPageScraper()
    inst_land_page.land_gfg_dsa_land_page()

def linkedlist():
    inst_lk = DsaLkScraper()
    inst_lk.land_gfg_dsa_lk_page()

def matrix():
    inst_matrix = DsaMatrixScraper()
    inst_matrix.land_gfg_dsa_matrix_page()

def misc():
    inst_misc = DsaMiscScraper()
    inst_misc.land_gfg_dsa_misc_page()

def queue():
    inst_queue = DsaQueueScraper()
    inst_queue.land_gfg_dsa_queue_page()

def stack():
    inst_stack = DsaStackScraper()
    inst_stack.land_gfg_dsa_stack_page()

scrape = argparse.ArgumentParser(description="GFG DSA Page Scraper")
subparsers = scrape.add_subparsers(dest="subcommand")

scrap_graph = subparsers.add_parser("graph", help="Scrape Graph Data Structure Page")
scrap_graph.set_defaults(func=graph)

scrap_adv = subparsers.add_parser("adv", help="Scrape Advanced Data Structure Page")
scrap_adv.set_defaults(func=adv)

scrap_array = subparsers.add_parser("array", help="Scrape Array Data Structure Page")
scrap_array.set_defaults(func=array)

scrap_bst = subparsers.add_parser("bst", help="Scrape Binary Search Tree Data Structure Page")
scrap_bst.set_defaults(func=bst)

scrap_binarytree = subparsers.add_parser("binarytree", help="Scrape Binary Tree Data Structure Page")
scrap_binarytree.set_defaults(func=binarytree)

scrap_hashing = subparsers.add_parser("hashing", help="Scrape Hashing Data Structure Page")
scrap_hashing.set_defaults(func=hashing)

scrap_heap = subparsers.add_parser("heap", help="Scrape Heap Data Structure Page")
scrap_heap.set_defaults(func=heap)

scrap_landpage = subparsers.add_parser("landpage", help="Scrape Landing Page")
scrap_landpage.set_defaults(func=landpage)

scrap_linkedlist = subparsers.add_parser("linkedlist", help="Scrape Linked List Data Structure Page")
scrap_linkedlist.set_defaults(func=linkedlist)

scrap_matrix = subparsers.add_parser("matrix", help="Scrape Matrix Data Structure Page")
scrap_matrix.set_defaults(func=matrix)

scrap_misc = subparsers.add_parser("misc", help="Scrape Miscellaneous Topic Page")
scrap_misc.set_defaults(func=misc)

scrap_queue = subparsers.add_parser("queue", help="Scrape Queue Data Structure Page")
scrap_queue.set_defaults(func=queue)

scrap_stack = subparsers.add_parser("stack", help="Scrape Stack Data Structure Page")
scrap_stack.set_defaults(func=stack)

args = scrape.parse_args()

if args.subcommand:
    args.func()

else:
    scrape.print_help()
























