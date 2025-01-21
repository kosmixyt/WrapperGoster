from cx_Freeze import setup, Executable

setup(
    name="Wrapper YTMusic",
    version="1.0",
    description="Wrapper for YTMusic",
    executables=[Executable("index.py")]
)